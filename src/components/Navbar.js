import { useState, useEffect, useRef, useCallback } from 'react';
import './Navbar.css';
import zLogo from '../assets/z-logo.webp';

const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const clearSearchHighlights = () => {
  const marks = document.querySelectorAll('mark.search-highlight');
  marks.forEach((el) => {
    const parent = el.parentNode;
    if (!parent) return;
    parent.replaceChild(document.createTextNode(el.textContent), el);
    parent.normalize();
  });
};

const applySearchHighlights = (query) => {
  if (!query) return [];
  const root = document.querySelector('.App') || document.body;
  const matches = [];
  const textNodes = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      const p = node.parentNode;
      if (!p) return NodeFilter.FILTER_REJECT;
      const tag = p.nodeName;
      if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'MARK' || tag === 'NOSCRIPT') {
        return NodeFilter.FILTER_REJECT;
      }
      if (p.closest && (p.closest('.navbar') || p.closest('.search-overlay'))) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  let n;
  while ((n = walker.nextNode())) textNodes.push(n);

  const pattern = escapeRegExp(query);
  textNodes.forEach((textNode) => {
    const text = textNode.nodeValue;
    const re = new RegExp(pattern, 'gi');
    if (!re.test(text)) return;
    re.lastIndex = 0;
    const frag = document.createDocumentFragment();
    let lastIdx = 0;
    let m;
    while ((m = re.exec(text)) !== null) {
      if (m.index > lastIdx) {
        frag.appendChild(document.createTextNode(text.slice(lastIdx, m.index)));
      }
      const mark = document.createElement('mark');
      mark.className = 'search-highlight';
      mark.textContent = m[0];
      frag.appendChild(mark);
      matches.push(mark);
      lastIdx = m.index + m[0].length;
      if (m[0].length === 0) re.lastIndex++;
    }
    if (lastIdx < text.length) {
      frag.appendChild(document.createTextNode(text.slice(lastIdx)));
    }
    textNode.parentNode.replaceChild(frag, textNode);
  });
  return matches;
};

const navItems = [
  { name: 'Ad Solutions', id: 'premium-ad-formats' },
  { name: 'Advertise with us', id: 'contact' },
  { name: 'Z Rise', href: '/rise/index.html' }
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentMatch, setCurrentMatch] = useState(0);
  const [totalMatches, setTotalMatches] = useState(0);
  const matchesRef = useRef([]);
  const searchInputRef = useRef(null);

  const downloadNewsletter = () => {
    const link = document.createElement('a');
    link.href = '/newsletter.pdf';
    link.download = 'newsletter.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const focusMatch = useCallback((idx) => {
    const list = matchesRef.current;
    if (!list.length) return;
    list.forEach((el) => el.classList.remove('search-highlight-current'));
    const target = list[idx];
    if (target) {
      target.classList.add('search-highlight-current');
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  const runSearch = useCallback((query) => {
    clearSearchHighlights();
    const trimmed = query.trim();
    if (!trimmed) {
      matchesRef.current = [];
      setTotalMatches(0);
      setCurrentMatch(0);
      return;
    }
    const matches = applySearchHighlights(trimmed);
    matchesRef.current = matches;
    setTotalMatches(matches.length);
    setCurrentMatch(matches.length ? 1 : 0);
    if (matches.length) {
      matches[0].classList.add('search-highlight-current');
      matches[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  useEffect(() => {
    if (!searchOpen) return;
    const id = setTimeout(() => {
      if (searchInputRef.current) searchInputRef.current.focus();
    }, 50);
    return () => clearTimeout(id);
  }, [searchOpen]);

  useEffect(() => {
    return () => clearSearchHighlights();
  }, []);

  const openSearch = () => {
    setSearchOpen(true);
    setMobileMenuOpen(false);
  };

  const closeSearch = () => {
    clearSearchHighlights();
    matchesRef.current = [];
    setSearchOpen(false);
    setSearchQuery('');
    setTotalMatches(0);
    setCurrentMatch(0);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    runSearch(value);
  };

  const gotoMatch = (direction) => {
    if (!totalMatches) return;
    const next = ((currentMatch - 1 + direction) % totalMatches + totalMatches) % totalMatches;
    setCurrentMatch(next + 1);
    focusMatch(next);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      gotoMatch(e.shiftKey ? -1 : 1);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      closeSearch();
    }
  };

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown((current) => (current === name ? null : name));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className={`navbar ${searchOpen ? 'search-open' : ''}`}>
        <div className="navbar-logo">
          <img src={zLogo} alt="Z Logo" className="z-logo" />
        </div>

        <div className={`navbar-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <div className="mobile-menu-header">
            <span className="mobile-menu-label">Menu</span>
            <button
              type="button"
              className="mobile-menu-close"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          {navItems.map((item) => (
            item.dropdown ? (
              <div
                key={item.name}
                className={`navbar-dropdown ${openDropdown === item.name ? 'open' : ''}`}
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={`#${item.id}`}
                  className="navbar-dropdown-trigger"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === item.name}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown(item.name);
                  }}
                >
                  <span className="mobile-link-text">{item.name}</span>
                  <svg
                    className="navbar-dropdown-caret"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                  <svg
                    className="mobile-link-arrow"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <div className="navbar-dropdown-menu" role="menu">
                  {item.dropdown.map((sub) => (
                    <a
                      key={sub.name}
                      href={sub.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      role="menuitem"
                      onClick={() => {
                        setOpenDropdown(null);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              </div>
            ) : item.href ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="mobile-link-text">{item.name}</span>
                <svg
                  className="mobile-link-arrow"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            ) : (
              <a
                key={item.name}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                <span className="mobile-link-text">{item.name}</span>
                <svg
                  className="mobile-link-arrow"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            )
          ))}
        </div>

        <div className="navbar-actions">
          <button
            type="button"
            className="navbar-newsletter-btn"
            onClick={downloadNewsletter}
            aria-label="Download Newsletter"
          >
            <span className="navbar-newsletter-glow" aria-hidden="true"></span>
            <span className="navbar-newsletter-inner">
              <svg className="navbar-newsletter-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span className="navbar-newsletter-text">Newsletter</span>
            </span>
          </button>

          <div className={`search-container ${searchOpen ? 'expanded' : ''}`}>
            <div className="search-panel" aria-hidden={!searchOpen}>
              <input
                ref={searchInputRef}
                type="text"
                className="search-overlay-input"
                placeholder="Search this page..."
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={handleSearchKeyDown}
                aria-label="Search query"
                tabIndex={searchOpen ? 0 : -1}
              />
              <span className="search-overlay-count">
                {totalMatches > 0 ? `${currentMatch} / ${totalMatches}` : searchQuery ? '0 / 0' : ''}
              </span>
              <button
                type="button"
                className="search-overlay-submit"
                onClick={() => {
                  if (totalMatches > 0) {
                    gotoMatch(1);
                  } else {
                    runSearch(searchQuery);
                  }
                }}
                disabled={!searchQuery.trim()}
                aria-label="Search"
                tabIndex={searchOpen ? 0 : -1}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <span>Search</span>
              </button>
              <button
                type="button"
                className="search-overlay-nav"
                onClick={() => gotoMatch(-1)}
                disabled={!totalMatches}
                aria-label="Previous match"
                tabIndex={searchOpen ? 0 : -1}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </button>
              <button
                type="button"
                className="search-overlay-nav"
                onClick={() => gotoMatch(1)}
                disabled={!totalMatches}
                aria-label="Next match"
                tabIndex={searchOpen ? 0 : -1}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>
            <button
              className={`search-btn ${searchOpen ? 'is-open' : ''}`}
              aria-label={searchOpen ? 'Close search' : 'Search'}
              onClick={searchOpen ? closeSearch : openSearch}
              type="button"
            >
              <svg
                className="search-btn-icon search-btn-icon-search"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <svg
                className="search-btn-icon search-btn-icon-close"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <button
            className={`hamburger-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          className="mobile-menu-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
