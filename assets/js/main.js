// Hindolita Chakraborty — site behaviour (no dependencies)
(function () {
  'use strict';

  var nav = document.getElementById('topnav');
  var menuBtn = document.getElementById('menuBtn');
  var links = document.getElementById('navlinks');

  // Subtle nav border once the page scrolls
  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 24); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  function setMenu(open) {
    links.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  menuBtn.addEventListener('click', function () {
    var open = menuBtn.getAttribute('aria-expanded') !== 'true';
    setMenu(open);
    if (open) { var first = links.querySelector('a'); if (first) first.focus(); }
  });
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuBtn.focus();
    }
  });
  // Close the menu if the window grows past the mobile breakpoint
  window.matchMedia('(min-width: 851px)').addEventListener('change', function (mq) {
    if (mq.matches) setMenu(false);
  });

  // Footer year
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Audio players: custom dark-brown controls over a native <audio>.
  // Without JavaScript the browser's own audio controls are shown instead.
  function fmt(t) {
    if (!isFinite(t)) return '0:00';
    var m = Math.floor(t / 60), s = Math.floor(t % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
  }
  var players = [];
  document.querySelectorAll('.audio-player').forEach(function (player) {
    var audio = player.querySelector('audio');
    var playBtn = player.querySelector('.ap-play');
    var muteBtn = player.querySelector('.ap-mute');
    var seek = player.querySelector('.ap-seek');
    var vol = player.querySelector('.ap-volume');
    var cur = player.querySelector('.ap-current');
    var dur = player.querySelector('.ap-duration');
    var title = (playBtn.getAttribute('aria-label') || 'Play').replace(/^Play\s*/, '');
    var seeking = false;

    audio.removeAttribute('controls');
    player.classList.add('is-enhanced');
    players.push(audio);

    function paint() {
      var d = audio.duration || Number(seek.max) || 0;
      var t = seeking ? Number(seek.value) : audio.currentTime;
      if (!seeking) seek.value = t;
      seek.style.setProperty('--progress', (d ? (t / d) * 100 : 0) + '%');
      cur.textContent = fmt(t);
    }
    function setPlaying(on) {
      player.classList.toggle('is-playing', on);
      playBtn.setAttribute('aria-label', (on ? 'Pause ' : 'Play ') + title);
    }

    playBtn.addEventListener('click', function () {
      if (audio.paused) {
        players.forEach(function (other) { if (other !== audio) other.pause(); });
        audio.play();
      } else {
        audio.pause();
      }
    });
    function paintVolume() {
      var level = audio.muted ? 0 : audio.volume;
      player.classList.toggle('is-muted', level === 0);
      muteBtn.setAttribute('aria-label', level === 0 ? 'Unmute' : 'Mute');
      if (vol) { vol.value = level; vol.style.setProperty('--progress', (level * 100) + '%'); }
    }
    muteBtn.addEventListener('click', function () {
      if (audio.muted || audio.volume === 0) { audio.muted = false; if (audio.volume === 0) audio.volume = 1; }
      else { audio.muted = true; }
      paintVolume();
    });
    if (vol) vol.addEventListener('input', function () {
      audio.volume = Number(vol.value);
      audio.muted = audio.volume === 0;
      paintVolume();
    });
    seek.addEventListener('input', function () { seeking = true; paint(); });
    seek.addEventListener('change', function () {
      seeking = false;
      var target = Number(seek.value);
      if (audio.readyState > 0) { audio.currentTime = target; }
      else {
        audio.preload = 'metadata';
        audio.addEventListener('loadedmetadata', function once() {
          audio.removeEventListener('loadedmetadata', once);
          audio.currentTime = target;
        });
        audio.load();
      }
      paint();
    });
    audio.addEventListener('loadedmetadata', function () {
      seek.max = audio.duration;
      dur.textContent = fmt(audio.duration);
      paint();
    });
    audio.addEventListener('timeupdate', paint);
    audio.addEventListener('play', function () { setPlaying(true); });
    audio.addEventListener('pause', function () { setPlaying(false); });
    audio.addEventListener('ended', function () { setPlaying(false); audio.currentTime = 0; paint(); });
    paint();
  });

  // Reveal-on-scroll
  var reveals = document.querySelectorAll('.reveal');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { observer.observe(el); });
  }
})();
