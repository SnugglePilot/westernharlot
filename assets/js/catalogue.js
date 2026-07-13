// Category filter for the upgrade catalogue. Cards are rendered at build
// time by Jekyll; this only builds the filter buttons and toggles visibility.
(function () {
  var cards = Array.prototype.slice.call(document.querySelectorAll('#grid .card'));
  var wrap = document.getElementById('filters');
  var count = document.getElementById('count');
  if (!cards.length || !wrap || !count) return;

  var cats = ['All'];
  cards.forEach(function (c) {
    if (cats.indexOf(c.dataset.cat) === -1) cats.push(c.dataset.cat);
  });

  var active = 'All';

  function apply() {
    var shown = 0;
    cards.forEach(function (c) {
      var show = active === 'All' || c.dataset.cat === active;
      c.style.display = show ? '' : 'none';
      if (show) shown++;
    });
    count.textContent = shown;
    Array.prototype.forEach.call(wrap.children, function (b) {
      b.classList.toggle('on', b.textContent === active);
    });
  }

  cats.forEach(function (name) {
    var b = document.createElement('button');
    b.className = 'fbtn';
    b.textContent = name;
    b.addEventListener('click', function () { active = name; apply(); });
    wrap.appendChild(b);
  });

  apply();
})();
