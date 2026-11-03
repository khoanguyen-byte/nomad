/* @ds-bundle: {"format":4,"namespace":"BlueStonePerformanceDesignSystem_fd579b","components":[{"name":"BarPairChart","sourcePath":"components/charts/BarPairChart.jsx"},{"name":"FunnelRow","sourcePath":"components/charts/FunnelRow.jsx"},{"name":"Legend","sourcePath":"components/charts/Legend.jsx"},{"name":"ScatterPlot","sourcePath":"components/charts/ScatterPlot.jsx"},{"name":"ShareBar","sourcePath":"components/charts/ShareBar.jsx"},{"name":"TrendLine","sourcePath":"components/charts/TrendLine.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardHeader","sourcePath":"components/core/Card.jsx"},{"name":"DataTable","sourcePath":"components/core/DataTable.jsx"},{"name":"DataBar","sourcePath":"components/core/DataTable.jsx"},{"name":"Dialog","sourcePath":"components/core/Dialog.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Radio","sourcePath":"components/core/Radio.jsx"},{"name":"SegmentedControl","sourcePath":"components/core/SegmentedControl.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"AlertRow","sourcePath":"components/dashboard/AlertRow.jsx"},{"name":"FilterChips","sourcePath":"components/dashboard/FilterChips.jsx"},{"name":"Footnote","sourcePath":"components/dashboard/Footnote.jsx"},{"name":"KpiCard","sourcePath":"components/dashboard/KpiCard.jsx"},{"name":"NavRail","sourcePath":"components/dashboard/NavRail.jsx"},{"name":"PacingBar","sourcePath":"components/dashboard/PacingBar.jsx"},{"name":"PageHeader","sourcePath":"components/dashboard/PageHeader.jsx"},{"name":"TargetCard","sourcePath":"components/dashboard/TargetCard.jsx"}],"sourceHashes":{"components/charts/BarPairChart.jsx":"0c2f1c84b73f","components/charts/FunnelRow.jsx":"ff994214d5bb","components/charts/Legend.jsx":"eab7555d9d6e","components/charts/ScatterPlot.jsx":"bd579c5c79e2","components/charts/ShareBar.jsx":"c31088e29bc0","components/charts/TrendLine.jsx":"2849ea095a9e","components/core/Button.jsx":"1af4243ddf81","components/core/Card.jsx":"c3f1dafb5f99","components/core/DataTable.jsx":"11074e42c078","components/core/Dialog.jsx":"3befb627c90c","components/core/Input.jsx":"38328bb43c52","components/core/Radio.jsx":"7750a67d81b1","components/core/SegmentedControl.jsx":"401603839f74","components/core/Tag.jsx":"2d27d909c586","components/dashboard/AlertRow.jsx":"b4a37aa404e0","components/dashboard/FilterChips.jsx":"c63dab41eaa6","components/dashboard/Footnote.jsx":"cff49a600f87","components/dashboard/KpiCard.jsx":"4c2978022e92","components/dashboard/NavRail.jsx":"b41335195b06","components/dashboard/PacingBar.jsx":"aa6bca96fa68","components/dashboard/PageHeader.jsx":"3d8bd0af291b","components/dashboard/TargetCard.jsx":"6316d6d3e50c","ui_kits/performance_dashboard/Screens.jsx":"771af0105c4b","ui_kits/performance_dashboard/data.js":"ce9ea396a3b4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BlueStonePerformanceDesignSystem_fd579b = window.BlueStonePerformanceDesignSystem_fd579b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// hover tooltip shared by chart components
window.__DSTip = function ({ left, top, title, rows, flip, above }) {
  const tx = above ? '-50%' : (flip ? 'calc(-100% - 14px)' : '14px');
  const ty = above ? 'calc(-100% - 10px)' : '-50%';
  return React.createElement('div', { style: { position: 'absolute', left, top, transform: 'translate(' + tx + ',' + ty + ')', zIndex: 30, pointerEvents: 'none', background: '#1F1B17', color: '#FAF8F4', borderRadius: 6, padding: '8px 10px', minWidth: 150, boxShadow: '0 6px 20px rgba(31,27,23,0.22)', display: 'flex', flexDirection: 'column', gap: 4, fontFamily: 'var(--font-body)', whiteSpace: 'nowrap' } },
    title && React.createElement('div', { style: { fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#B8B0A6', paddingBottom: 2 } }, title),
    (rows || []).map((r, i) => React.createElement('div', { key: i, style: { display: 'flex', alignItems: 'center', gap: 8, fontSize: 12.5 } },
      r.color && React.createElement('span', { style: { width: 8, height: 8, borderRadius: 2, background: r.color, flex: 'none' } }),
      React.createElement('span', { style: { color: '#D8D2C9' } }, r.label),
      React.createElement('span', { style: { marginLeft: 'auto', paddingLeft: 12, fontVariantNumeric: 'tabular-nums', fontWeight: 600, color: r.valueColor || '#FAF8F4' } }, r.value))));
};
// components/charts/BarPairChart.jsx
try { (() => {
function BarPairChart({ data = [], height = 210, activeKey, style }) {
  const [hov, setHov] = React.useState(-1);
  const maxA = Math.max.apply(null, data.map(d => d.a || 0).concat([1]));
  const maxB = Math.max.apply(null, data.map(d => d.b || 0).concat([1]));
  const n = data.length || 1;
  const hd = hov >= 0 ? data[hov] : null;
  return React.createElement('div', { style: { position: 'relative', ...style }, onMouseLeave: () => setHov(-1) },
    React.createElement('div', { style: { display: 'flex', alignItems: 'flex-end', gap: 'var(--space-4)', height } },
      data.map((d, i) => React.createElement('div', { key: d.key || i, onMouseEnter: () => setHov(i), style: { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 'var(--space-2)', height: '100%', cursor: 'default', opacity: hov >= 0 && hov !== i ? 0.4 : 1, transition: 'opacity 120ms' } },
        React.createElement('div', { style: { fontSize: 11, textAlign: 'center', color: hov === i ? 'var(--color-text)' : 'var(--color-neutral-400)', fontVariantNumeric: 'tabular-nums' } }, d.topLabel),
        React.createElement('div', { style: { display: 'flex', alignItems: 'flex-end', gap: 3, height: height - 60, borderRadius: 4, background: hov === i ? 'var(--state-row-hover)' : 'transparent' } },
          React.createElement('div', { style: { flex: 1, background: 'var(--series-nmv)', borderRadius: '3px 3px 0 0', height: ((d.a || 0) / maxA * 100).toFixed(1) + '%' } }),
          React.createElement('div', { style: { flex: 1, background: 'var(--series-cost)', borderRadius: '3px 3px 0 0', height: ((d.b || 0) / maxB * 100).toFixed(1) + '%' } })),
        React.createElement('div', { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, paddingTop: 'var(--space-1)', borderTop: '1px solid var(--border-hairline)' } },
          React.createElement('span', { style: { fontSize: 12, color: d.key === activeKey || hov === i ? 'var(--color-accent)' : 'var(--color-neutral-400)' } }, d.label),
          d.subLabel && React.createElement('span', { style: { fontSize: 10.5, color: 'var(--text-faint)', fontVariantNumeric: 'tabular-nums' } }, d.subLabel))))),
    hd && React.createElement(window.__DSTip, Object.assign({ left: ((hov + 0.5) / n * 100) + '%', top: height * 0.45, flip: (hov + 0.5) / n > 0.6 }, hd.tip || { title: hd.label, rows: [{ color: 'var(--series-nmv)', label: 'A', value: String(hd.a) }, { color: 'var(--series-cost)', label: 'B', value: String(hd.b) }] })));
}
Object.assign(__ds_scope, { BarPairChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/BarPairChart.jsx", error: String((e && e.message) || e) }); }

// components/charts/FunnelRow.jsx
try { (() => {
function FunnelRow({ name, rates, steps = [], style }) {
  const [hov, setHov] = React.useState(-1);
  const base = steps.length && steps[0].share ? steps[0].share : 1;
  return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...style } },
    React.createElement('div', { style: { display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' } },
      React.createElement('span', { style: { fontSize: 13 } }, name),
      React.createElement('span', { style: { fontSize: 11.5, color: 'var(--text-muted)', fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' } }, rates)),
    steps.map((s, i) => React.createElement('div', { key: i, onMouseEnter: () => setHov(i), onMouseLeave: () => setHov(-1), style: { position: 'relative', display: 'flex', alignItems: 'center', gap: 'var(--space-3)' } },
      React.createElement('div', { style: { flex: 1, minWidth: 0, height: 'var(--bar-row)', borderRadius: 'var(--radius-sm)', background: 'var(--surface-inset)', overflow: 'hidden', boxShadow: hov === i ? 'inset 0 0 0 1px var(--border-strong)' : 'none' } },
        React.createElement('div', { style: { height: '100%', borderRadius: 'var(--radius-sm)', background: s.fill || 'var(--color-accent-700)', width: (s.share * 100).toFixed(1) + '%', filter: hov === i ? 'brightness(0.9)' : 'none' } })),
      React.createElement('span', { style: { width: 104, flex: 'none', fontSize: 11.5, color: hov === i ? 'var(--color-text)' : 'var(--text-secondary)', fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap', textAlign: 'right' } }, s.text),
      hov === i && React.createElement(window.__DSTip, Object.assign({ left: Math.min(Math.max(s.share * 100, 4), 70) + '%', top: '50%', flip: false }, s.tip || { title: name, rows: [{ color: s.fill, label: s.text, value: (s.share / base * 100).toFixed(2) + '% of first step' }] })))));
}
Object.assign(__ds_scope, { FunnelRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/FunnelRow.jsx", error: String((e && e.message) || e) }); }

// components/charts/Legend.jsx
try { (() => {
function Legend({
  items = [],
  shape = 'square',
  style
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      fontSize: 11,
      color: 'var(--text-muted)',
      flexWrap: 'wrap',
      ...style
    }
  }, items.map((it, i) => React.createElement('span', {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      whiteSpace: 'nowrap'
    }
  }, React.createElement('span', {
    style: {
      width: 9,
      height: 9,
      display: 'block',
      borderRadius: shape === 'dot' ? '50%' : 2,
      background: it.color
    }
  }), it.label)));
}
Object.assign(__ds_scope, { Legend });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/Legend.jsx", error: String((e && e.message) || e) }); }

// components/charts/ScatterPlot.jsx
try { (() => {
function ScatterPlot({ points = [], xTicks = [], yTicks = [], target, height = 300, note, style }) {
  const [hov, setHov] = React.useState(-1);
  const L = 46, R = 512, T = 12, B = 256;
  const px = x => (L + x * (R - L)).toFixed(1);
  const py = y => (B - y * (B - T)).toFixed(1);
  const hp = hov >= 0 ? points[hov] : null;
  const fs = { fontSize: 10, fontFamily: 'var(--font-body)' };
  return React.createElement('div', { style: { position: 'relative', ...style }, onMouseLeave: () => setHov(-1) },
    React.createElement('svg', { viewBox: '0 0 520 300', style: { width: '100%', height, display: 'block' } },
      React.createElement('line', { x1: L, y1: B, x2: R, y2: B, stroke: 'var(--axis-line)' }),
      React.createElement('line', { x1: L, y1: T, x2: L, y2: B, stroke: 'var(--axis-line)' }),
      target !== undefined && React.createElement('line', { x1: L, y1: py(target), x2: R, y2: py(target), stroke: 'var(--color-accent)', strokeWidth: 1, strokeDasharray: '4 4' }),
      target !== undefined && React.createElement('text', Object.assign({ x: R - 4, y: py(target) - 5, fill: 'var(--color-accent)', textAnchor: 'end' }, fs), 'Mục tiêu'),
      yTicks.map((t, i) => React.createElement('text', Object.assign({ key: 'y' + i, x: L - 6, y: py(t.at) + 3, fill: 'var(--series-cost)', textAnchor: 'end' }, fs), t.label)),
      xTicks.map((t, i) => React.createElement('text', Object.assign({ key: 'x' + i, x: px(t.at), y: B + 16, fill: 'var(--series-cost)', textAnchor: 'middle' }, fs), t.label)),
      hp && React.createElement('line', { x1: L, y1: py(hp.y), x2: px(hp.x), y2: py(hp.y), stroke: 'var(--axis-line)', strokeDasharray: '3 3' }),
      hp && React.createElement('line', { x1: px(hp.x), y1: py(hp.y), x2: px(hp.x), y2: B, stroke: 'var(--axis-line)', strokeDasharray: '3 3' }),
      points.map((p, i) => React.createElement('circle', { key: i, cx: px(p.x), cy: py(p.y), r: (p.r || 4) + (hov === i ? 3 : 0), fill: p.fill || 'var(--series-nmv)', fillOpacity: hov < 0 ? 0.75 : (hov === i ? 1 : 0.25), stroke: hov === i ? '#FFFFFF' : 'none', strokeWidth: 2, style: { cursor: 'pointer', transition: 'fill-opacity 120ms' }, onMouseEnter: () => setHov(i) })),
      note && React.createElement('text', Object.assign({ x: L, y: 292, fill: 'var(--series-cost)' }, fs), note)),
    hp && React.createElement(window.__DSTip, Object.assign({ left: (+px(hp.x) / 520 * 100) + '%', top: (+py(hp.y) / 300 * height), flip: hp.x > 0.6 }, hp.tip || { rows: [{ label: 'x', value: hp.x.toFixed(2) }, { label: 'y', value: hp.y.toFixed(2) }] })));
}
Object.assign(__ds_scope, { ScatterPlot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/ScatterPlot.jsx", error: String((e && e.message) || e) }); }

// components/charts/ShareBar.jsx
try { (() => {
function ShareBar({ name, valueText, shareText, share = 0, fill = 'var(--series-nmv)', meta, height = 'var(--bar-track)', tip, style }) {
  const [hov, setHov] = React.useState(false);
  return React.createElement('div', { onMouseEnter: () => setHov(true), onMouseLeave: () => setHov(false), style: { position: 'relative', display: 'flex', flexDirection: 'column', gap: 5, borderRadius: 6, background: hov ? 'var(--state-row-hover)' : 'transparent', boxShadow: hov ? '0 0 0 6px var(--state-row-hover)' : 'none', ...style } },
    React.createElement('div', { style: { display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 'var(--space-3)' } },
      React.createElement('span', { style: { fontSize: 13, fontWeight: hov ? 600 : 400 } }, name),
      React.createElement('span', { style: { fontSize: 12, color: hov ? 'var(--color-text)' : 'var(--color-neutral-400)', fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' } }, shareText ? valueText + ' · ' + shareText : valueText)),
    React.createElement('div', { style: { height, borderRadius: 4, background: 'var(--surface-inset)', overflow: 'hidden' } },
      React.createElement('div', { style: { height: '100%', borderRadius: 4, background: fill, width: (share * 100).toFixed(1) + '%', filter: hov ? 'brightness(0.9)' : 'none' } })),
    meta && React.createElement('div', { style: { fontSize: 10.5, color: hov ? 'var(--text-secondary)' : 'var(--text-faint)', fontVariantNumeric: 'tabular-nums' } }, meta),
    hov && React.createElement(window.__DSTip, Object.assign({ left: Math.min(Math.max(share * 100, 6), 62) + '%', top: 0, above: true }, tip || { title: name, rows: [{ color: fill, label: 'Value', value: valueText }].concat(shareText ? [{ label: 'Share', value: shareText }] : []).concat(meta ? [{ label: meta, value: '' }] : []) })));
}
Object.assign(__ds_scope, { ShareBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/ShareBar.jsx", error: String((e && e.message) || e) }); }

// components/charts/TrendLine.jsx
try { (() => {
function TrendLine({ series = [], height = 170, band, ticks = [], tips, style }) {
  const [hov, setHov] = React.useState(-1);
  const W = 1000, H = 160;
  const n = Math.max.apply(null, series.map(s => s.values.length).concat([0]));
  const maxes = series.map(s => Math.max.apply(null, s.values.concat([1])));
  const paths = series.map((s, k) => ({ color: s.color || 'var(--series-nmv)', width: s.width || 1.6, points: s.values.map((v, i) => (i / (s.values.length - 1) * W).toFixed(1) + ',' + (H - v / maxes[k] * (H - 10)).toFixed(1)).join(' ') }));
  const onMove = e => { if (n < 2) return; const r = e.currentTarget.getBoundingClientRect(); const f = (e.clientX - r.left) / r.width; setHov(Math.max(0, Math.min(n - 1, Math.round(f * (n - 1))))); };
  const fx = hov >= 0 && n > 1 ? hov / (n - 1) : 0;
  const tip = hov >= 0 ? ((tips && tips[hov]) || { title: 'Point ' + (hov + 1), rows: series.map(s => ({ color: s.color, label: s.label || 'Value', value: String(Math.round(s.values[hov] * 100) / 100) })) }) : null;
  return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...style } },
    React.createElement('div', { style: { position: 'relative', cursor: 'crosshair' }, onMouseMove: onMove, onMouseLeave: () => setHov(-1) },
      React.createElement('svg', { viewBox: '0 0 1000 161', preserveAspectRatio: 'none', style: { width: '100%', height, display: 'block' } },
        band && React.createElement('rect', { x: (band.from * W).toFixed(1), y: 0, width: ((band.to - band.from) * W).toFixed(1), height: 160, fill: 'var(--band-fill)' }),
        band && React.createElement('rect', { x: (band.from * W).toFixed(1), y: 0, width: 2, height: 160, fill: 'var(--series-nmv)' }),
        paths.map((p, i) => React.createElement('polyline', { key: i, points: p.points, fill: 'none', stroke: p.color, strokeWidth: p.width })),
        React.createElement('line', { x1: 0, y1: 160, x2: 1000, y2: 160, stroke: 'var(--axis-line)', strokeWidth: 1 })),
      hov >= 0 && React.createElement('div', { style: { position: 'absolute', top: 0, bottom: 0, left: (fx * 100) + '%', width: 1, background: 'rgba(31,27,23,0.35)', pointerEvents: 'none' } }),
      hov >= 0 && series.map((s, k) => React.createElement('div', { key: 'd' + k, style: { position: 'absolute', left: (fx * 100) + '%', top: ((H - (s.values[hov] || 0) / maxes[k] * (H - 10)) / 161 * height), width: 10, height: 10, marginLeft: -5, marginTop: -5, borderRadius: '50%', background: s.color, border: '2px solid #FFFFFF', boxShadow: '0 1px 3px rgba(31,27,23,0.3)', pointerEvents: 'none' } })),
      tip && React.createElement(window.__DSTip, Object.assign({ left: (fx * 100) + '%', top: height / 2, flip: fx > 0.6 }, tip))),
    ticks.length > 0 && React.createElement('div', { style: { position: 'relative', height: 15 } },
      ticks.map((t, i) => React.createElement('span', { key: i, style: { position: 'absolute', top: 0, left: (t.at * 100).toFixed(2) + '%', fontSize: 11, color: 'var(--text-muted)' } }, t.label))));
}
Object.assign(__ds_scope, { TrendLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/TrendLine.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  block,
  disabled,
  icon,
  as,
  href,
  onClick,
  children,
  style,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    fontFamily: 'var(--font-heading)',
    fontWeight: 'var(--font-heading-weight)',
    fontSize: size === 'sm' ? 12.5 : 14,
    lineHeight: 1.2,
    color: 'var(--color-text)',
    background: 'transparent',
    border: '1px solid transparent',
    padding: size === 'sm' ? '5px 11px' : 'var(--space-2) calc(var(--space-3) * 1.2)',
    borderRadius: 'var(--radius-md)',
    opacity: disabled ? 0.45 : 1,
    width: block ? '100%' : undefined
  };
  const variants = {
    primary: {
      color: 'var(--color-accent)',
      borderColor: 'var(--color-accent)'
    },
    secondary: {
      borderColor: 'var(--color-divider)'
    },
    ghost: {
      color: 'var(--color-accent)',
      paddingInline: 'var(--space-1)'
    },
    icon: {
      width: 36,
      height: 36,
      padding: 0,
      borderColor: 'var(--color-divider)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverBg = variant === 'primary' || variant === 'ghost' ? 'color-mix(in srgb, var(--color-accent) 12%, transparent)' : 'color-mix(in srgb, var(--color-text) 7%, transparent)';
  const Tag = as || (href ? 'a' : 'button');
  return React.createElement(Tag, {
    href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      background: hover && !disabled ? hoverBg : base.background,
      ...style
    },
    ...rest
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  elevation = 'sm',
  padding = 'var(--space-6)',
  gap = 'var(--space-4)',
  children,
  style,
  ...rest
}) {
  const shadow = {
    none: 'none',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  }[elevation];
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap,
      padding,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-card)',
      boxShadow: shadow,
      ...style
    },
    ...rest
  }, children);
}
function CardHeader({
  title,
  note,
  right,
  style
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      ...style
    }
  }, React.createElement('div', null, React.createElement('h4', {
    style: {
      margin: '0 0 2px'
    }
  }, title), note && React.createElement('span', {
    style: {
      fontSize: 'var(--text-note-sm)',
      color: 'var(--text-faint)'
    }
  }, note)), right);
}
Object.assign(__ds_scope, { Card, CardHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/DataTable.jsx
try { (() => {
function DataTable({
  columns = [],
  rows = [],
  style
}) {
  const [hover, setHover] = React.useState(-1);
  const rule = op => 'linear-gradient(to right, transparent, color-mix(in srgb, var(--color-text) ' + op + '%, transparent) 48px, color-mix(in srgb, var(--color-text) ' + op + '%, transparent) calc(100% - 48px), transparent) no-repeat bottom / 100% 1px';
  return React.createElement('table', {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 'var(--text-table)',
      fontVariantNumeric: 'tabular-nums',
      ...style
    }
  }, React.createElement('thead', null, React.createElement('tr', {
    style: {
      background: rule(16)
    }
  }, columns.map((c, i) => React.createElement('th', {
    key: i,
    style: {
      textAlign: c.align === 'right' ? 'right' : 'left',
      fontSize: 11,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      fontWeight: 400,
      color: c.accent ? 'var(--color-accent)' : 'color-mix(in srgb, var(--color-text) 60%, transparent)',
      padding: 'var(--space-2)',
      whiteSpace: 'nowrap'
    }
  }, c.label)))), React.createElement('tbody', null, rows.map((r, ri) => React.createElement('tr', {
    key: ri,
    onMouseEnter: () => setHover(ri),
    onMouseLeave: () => setHover(-1),
    style: {
      background: (hover === ri ? 'linear-gradient(var(--state-row-hover), var(--state-row-hover)) no-repeat 0 0 / 100% 100%, ' : '') + rule(8)
    }
  }, columns.map((c, ci) => {
    const cell = r[c.key];
    const v = cell && typeof cell === 'object' && !React.isValidElement(cell) ? cell : {
      value: cell
    };
    return React.createElement('td', {
      key: ci,
      style: {
        padding: 'var(--space-2)',
        textAlign: c.align === 'right' ? 'right' : 'left',
        whiteSpace: c.wrap ? 'normal' : 'nowrap',
        color: v.color || 'inherit',
        background: v.bar || undefined
      }
    }, v.value === null || v.value === undefined ? '—' : v.value);
  })))));
}
function DataBar(share, tone = 'cost') {
  const c = {
    cost: 'var(--databar-cost)',
    up: 'var(--databar-up)',
    down: 'var(--databar-down)'
  }[tone];
  return 'linear-gradient(to left, ' + c + ' ' + (Math.min(Math.max(share, 0), 1) * 100).toFixed(1) + '%, transparent 0)';
}
Object.assign(__ds_scope, { DataTable, DataBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/core/Dialog.jsx
try { (() => {
function Dialog({
  title,
  children,
  actions,
  onDismiss,
  style
}) {
  return React.createElement('div', {
    onClick: onDismiss,
    style: {
      position: 'fixed',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--space-4)',
      background: 'color-mix(in srgb, #071021 62%, transparent)',
      zIndex: 40
    }
  }, React.createElement('div', {
    onClick: e => e.stopPropagation(),
    style: {
      width: 'min(440px, 100%)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      padding: 'var(--space-6)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-lg)',
      ...style
    }
  }, title && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--font-heading-weight)',
      fontSize: 20
    }
  }, title), React.createElement('div', {
    style: {
      fontSize: 14,
      opacity: 0.85
    }
  }, children), actions && React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-2)'
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function Input({
  label,
  hint,
  as = 'input',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const field = React.createElement(as, {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      minHeight: as === 'textarea' ? 90 : 36,
      padding: '6px 10px',
      font: 'inherit',
      fontSize: 14,
      color: 'var(--color-text)',
      caretColor: 'var(--color-accent)',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid ' + (focus ? 'var(--color-accent)' : 'var(--color-divider)'),
      resize: as === 'textarea' ? 'vertical' : undefined,
      ...style
    },
    ...rest
  });
  if (!label && !hint) return field;
  return React.createElement('div', null, label && React.createElement('label', {
    style: {
      display: 'block',
      fontSize: 12,
      marginBottom: 5,
      color: 'color-mix(in srgb, var(--color-text) 70%, transparent)'
    }
  }, label), field, hint && React.createElement('div', {
    style: {
      fontSize: 'var(--text-note-sm)',
      color: 'var(--text-faint)',
      marginTop: 4
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  name,
  style
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer',
      fontSize: 14,
      ...style
    }
  }, React.createElement('input', {
    type: 'radio',
    name,
    checked,
    onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0,
      pointerEvents: 'none'
    }
  }), React.createElement('span', {
    style: {
      width: 16,
      height: 16,
      flex: 'none',
      borderRadius: '50%',
      border: '1.5px solid ' + (checked ? 'var(--color-accent)' : 'var(--color-divider)'),
      background: checked ? 'var(--color-accent)' : 'transparent',
      boxShadow: checked ? 'inset 0 0 0 4px var(--surface-page)' : 'none'
    }
  }), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Radio.jsx", error: String((e && e.message) || e) }); }

// components/core/SegmentedControl.jsx
try { (() => {
function SegmentedControl({
  options = [],
  value,
  onChange,
  style
}) {
  return React.createElement('div', {
    style: {
      display: 'inline-flex',
      overflow: 'hidden',
      border: '1px solid var(--color-divider)',
      borderRadius: 'var(--radius-md)',
      ...style
    }
  }, options.map((o, i) => {
    const val = o.value !== undefined ? o.value : o;
    const on = val === value;
    return React.createElement('button', {
      key: val,
      onClick: () => onChange && onChange(val),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '7px 12px',
        fontSize: 13,
        cursor: 'pointer',
        background: 'transparent',
        border: 0,
        borderLeft: i ? '1px solid var(--color-divider)' : 0,
        fontFamily: 'var(--font-body)',
        color: on ? 'var(--color-accent)' : 'var(--color-text)',
        boxShadow: on ? 'var(--ring-selected)' : 'none'
      }
    }, o.label || val);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  tone = 'neutral',
  children,
  style,
  ...rest
}) {
  const tones = {
    accent: {
      background: 'var(--color-accent-800)',
      color: 'var(--color-accent-100)'
    },
    neutral: {
      background: 'var(--color-neutral-800)',
      color: 'var(--color-neutral-100)'
    },
    outline: {
      border: '1px solid var(--color-accent)',
      color: 'var(--color-accent)'
    },
    good: {
      background: 'var(--color-accent-700)',
      color: 'var(--color-accent-100)'
    },
    alert: {
      background: 'var(--color-alert-deep)',
      color: 'var(--color-alert-tint)'
    }
  };
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: 11,
      letterSpacing: '0.02em',
      padding: '3px 10px',
      borderRadius: 'calc(var(--radius-md) * 0.75)',
      whiteSpace: 'nowrap',
      ...tones[tone],
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/AlertRow.jsx
try { (() => {
function AlertRow({
  level = 'Chú ý',
  title,
  detail,
  tone = 'warn',
  style
}) {
  const t = {
    warn: {
      bg: 'rgba(184,70,59,0.18)',
      tagBg: 'var(--color-alert-deep)',
      tagColor: 'var(--color-alert-tint)'
    },
    info: {
      bg: 'var(--color-accent-900)',
      tagBg: 'var(--color-accent-800)',
      tagColor: 'var(--color-accent-100)'
    },
    ok: {
      bg: 'rgba(157,184,236,0.12)',
      tagBg: 'var(--color-accent-700)',
      tagColor: 'var(--color-accent-100)'
    }
  }[tone];
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      padding: 'var(--space-3)',
      borderRadius: 'var(--radius-md)',
      background: t.bg,
      ...style
    }
  }, React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: 11,
      padding: '3px 10px',
      borderRadius: 'calc(var(--radius-md) * 0.75)',
      background: t.tagBg,
      color: t.tagColor,
      whiteSpace: 'nowrap',
      flex: 'none'
    }
  }, level), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      minWidth: 0
    }
  }, React.createElement('span', {
    style: {
      fontSize: 13.5
    }
  }, title), React.createElement('span', {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, detail)));
}
Object.assign(__ds_scope, { AlertRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/AlertRow.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/FilterChips.jsx
try { (() => {
function FilterChips({
  label,
  options = [],
  value,
  onChange,
  size = 'md',
  align = 'flex-end',
  style
}) {
  const [hover, setHover] = React.useState(-1);
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)',
      alignItems: align,
      ...style
    }
  }, label && React.createElement('div', {
    style: {
      fontSize: 10,
      letterSpacing: 'var(--tracking-kicker)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, label), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-1)',
      flexWrap: 'wrap',
      justifyContent: align
    }
  }, options.map((o, i) => {
    const val = o.value !== undefined ? o.value : o;
    const on = val === value;
    return React.createElement('button', {
      key: val,
      onClick: () => onChange && onChange(val),
      onMouseEnter: () => setHover(i),
      onMouseLeave: () => setHover(-1),
      style: {
        cursor: 'pointer',
        background: hover === i && !on ? 'var(--state-hover)' : 'transparent',
        border: '1px solid var(--color-divider)',
        borderRadius: 'var(--radius-md)',
        padding: size === 'sm' ? '5px 10px' : '5px 11px',
        font: 'var(--font-heading-weight) ' + (size === 'sm' ? 12 : 12.5) + 'px var(--font-heading)',
        color: on ? 'var(--color-accent)' : 'var(--color-text)',
        boxShadow: on ? 'var(--ring-selected)' : 'none'
      }
    }, o.label || val);
  })));
}
Object.assign(__ds_scope, { FilterChips });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/FilterChips.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/Footnote.jsx
try { (() => {
function Footnote({
  divided,
  children,
  style
}) {
  return React.createElement('div', {
    style: {
      fontSize: 'var(--text-note-sm)',
      color: 'var(--text-faint)',
      borderTop: divided ? '1px solid var(--border-hairline)' : undefined,
      paddingTop: divided ? 'var(--space-3)' : undefined,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Footnote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/Footnote.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/KpiCard.jsx
try { (() => {
function KpiCard({
  label,
  value,
  delta,
  deltaNote,
  tone = 'neutral',
  labelTone = 'muted',
  style
}) {
  const deltaColor = {
    up: 'var(--text-positive)',
    down: 'var(--text-negative)',
    neutral: 'var(--text-faint)'
  }[tone];
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)',
      padding: 'var(--space-4)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-sm)',
      ...style
    }
  }, React.createElement('div', {
    style: {
      fontSize: 10,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: labelTone === 'accent' ? 'var(--color-accent)' : 'var(--text-muted)'
    }
  }, label), React.createElement('div', {
    style: {
      font: 'var(--font-heading-weight) var(--text-metric)/1.1 var(--font-heading)',
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, value), (delta || deltaNote) && React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      fontSize: 11.5,
      fontVariantNumeric: 'tabular-nums',
      whiteSpace: 'nowrap'
    }
  }, React.createElement('span', {
    style: {
      color: deltaColor
    }
  }, delta || '—'), React.createElement('span', {
    style: {
      color: 'var(--text-faint)'
    }
  }, deltaNote)));
}
Object.assign(__ds_scope, { KpiCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/KpiCard.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/NavRail.jsx
try { (() => {
function NavRail({
  brand = 'BlueStone',
  product = 'Performance',
  groupLabel = 'Báo cáo',
  items = [],
  active,
  onSelect,
  footer,
  style
}) {
  const [hover, setHover] = React.useState(-1);
  return React.createElement('aside', {
    style: {
      width: 'var(--rail-width)',
      flex: 'none',
      minHeight: '100vh',
      background: 'var(--surface-rail)',
      borderRight: '1px solid var(--border-hairline)',
      padding: 'var(--space-6) var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)',
      ...style
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, React.createElement('div', {
    style: {
      font: 'var(--font-heading-weight) 17px var(--font-heading)',
      letterSpacing: 'var(--tracking-title)'
    }
  }, brand), React.createElement('div', {
    style: {
      fontSize: 11,
      letterSpacing: 'var(--tracking-kicker)',
      textTransform: 'uppercase',
      color: 'var(--color-accent)'
    }
  }, product)), React.createElement('nav', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      gap: 1
    }
  }, React.createElement('div', {
    style: {
      fontSize: 10,
      letterSpacing: 'var(--tracking-kicker)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      padding: 'var(--space-2) var(--space-2) var(--space-1)'
    }
  }, groupLabel), items.map((it, i) => React.createElement('a', {
    key: it.id || i,
    href: it.href || '#',
    'aria-current': it.id === active ? 'page' : undefined,
    onClick: onSelect ? e => {
      e.preventDefault();
      onSelect(it.id);
    } : undefined,
    onMouseEnter: () => setHover(i),
    onMouseLeave: () => setHover(-1),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-2)',
      padding: 'var(--space-2) var(--space-3)',
      borderRadius: 'var(--radius-md)',
      fontSize: 13.5,
      textDecoration: 'none',
      color: it.id === active ? 'var(--color-accent)' : 'var(--color-text)',
      background: hover === i ? 'var(--state-hover)' : 'transparent'
    }
  }, React.createElement('span', null, it.label), React.createElement('span', {
    style: {
      fontSize: 10,
      color: 'var(--text-faint)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, String(i + 1).padStart(2, '0'))))), footer && React.createElement('div', {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, footer));
}
Object.assign(__ds_scope, { NavRail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/NavRail.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/PacingBar.jsx
try { (() => {
function PacingBar({
  tag,
  text,
  share = 0,
  link,
  style
}) {
  return React.createElement('section', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      padding: 'var(--space-3) var(--space-4)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-notice)',
      boxShadow: 'var(--shadow-sm)',
      ...style
    }
  }, React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: 11,
      padding: '3px 10px',
      borderRadius: 'calc(var(--radius-md) * 0.75)',
      border: '1px solid var(--color-accent)',
      color: 'var(--color-accent)',
      flex: 'none',
      whiteSpace: 'nowrap'
    }
  }, tag), React.createElement('span', {
    style: {
      fontSize: 13,
      color: 'var(--text-on-accent)'
    }
  }, text), React.createElement('span', {
    style: {
      flex: 'none',
      width: 120,
      height: 'var(--bar-track-sm)',
      borderRadius: 3,
      background: 'var(--surface-inset)',
      overflow: 'hidden'
    }
  }, React.createElement('span', {
    style: {
      display: 'block',
      height: '100%',
      background: 'var(--series-nmv)',
      width: (share * 100).toFixed(1) + '%'
    }
  })), link && React.createElement('span', {
    style: {
      marginLeft: 'auto',
      fontSize: 12.5
    }
  }, link));
}
Object.assign(__ds_scope, { PacingBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/PacingBar.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/PageHeader.jsx
try { (() => {
function PageHeader({
  kicker,
  title,
  subtitle,
  right,
  style
}) {
  return React.createElement('header', {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-8)',
      ...style
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, kicker && React.createElement('div', {
    style: {
      fontSize: 10,
      letterSpacing: 'var(--tracking-kicker)',
      textTransform: 'uppercase',
      color: 'var(--color-accent)'
    }
  }, kicker), React.createElement('h1', {
    style: {
      fontSize: 'var(--text-page-title)',
      margin: 0
    }
  }, title), subtitle && React.createElement('p', {
    style: {
      margin: 0,
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, subtitle)), right);
}
Object.assign(__ds_scope, { PageHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/PageHeader.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/TargetCard.jsx
try { (() => {
function TargetCard({
  label,
  target,
  actual,
  gap,
  note,
  share = 0,
  mark = 0,
  tone = 'good',
  style
}) {
  const color = tone === 'alert' ? 'var(--text-negative)' : 'var(--color-accent)';
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      padding: 'var(--space-6)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-sm)',
      ...style
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--space-3)'
    }
  }, React.createElement('span', {
    style: {
      fontSize: 10,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, label), React.createElement('span', {
    style: {
      fontSize: 11,
      color: 'var(--text-faint)',
      whiteSpace: 'nowrap',
      fontVariantNumeric: 'tabular-nums'
    }
  }, target)), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-3)',
      whiteSpace: 'nowrap'
    }
  }, React.createElement('span', {
    style: {
      font: 'var(--font-heading-weight) var(--text-metric-xl)/1 var(--font-heading)',
      fontVariantNumeric: 'tabular-nums',
      color
    }
  }, actual), React.createElement('span', {
    style: {
      fontSize: 12,
      color
    }
  }, gap)), React.createElement('div', {
    style: {
      height: 'var(--bar-track-sm)',
      borderRadius: 3,
      background: 'var(--surface-inset)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      inset: '0 auto 0 0',
      width: (share * 100).toFixed(1) + '%',
      background: color,
      borderRadius: 3
    }
  }), React.createElement('div', {
    style: {
      position: 'absolute',
      top: -3,
      bottom: -3,
      width: 1,
      background: 'var(--color-neutral-300)',
      left: (mark * 100).toFixed(1) + '%'
    }
  })), note && React.createElement('div', {
    style: {
      fontSize: 'var(--text-note-sm)',
      color: 'var(--text-faint)'
    }
  }, note));
}
Object.assign(__ds_scope, { TargetCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/TargetCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/performance_dashboard/Screens.jsx
try { (() => {
const {
  NavRail,
  PageHeader,
  FilterChips,
  PacingBar,
  KpiCard,
  TargetCard,
  AlertRow,
  Footnote,
  Card,
  CardHeader,
  Button,
  Tag,
  DataTable,
  DataBar,
  SegmentedControl,
  Dialog,
  ShareBar,
  BarPairChart,
  TrendLine,
  FunnelRow,
  Legend,
  ScatterPlot
} = window.BlueStonePerformanceDesignSystem_fd579b;
const K = window.KIT;
function useScope(month) {
  const ms = month === 'all' ? K.MONTHS : K.MONTHS.filter(m => m.key === month);
  return K.derive(K.agg(ms));
}
function ScopeChips({
  month,
  setMonth
}) {
  const opts = K.MONTHS.map(m => ({
    value: m.key,
    label: m.label
  })).concat([{
    value: 'all',
    label: 'Toàn kỳ'
  }]);
  return /*#__PURE__*/React.createElement(FilterChips, {
    label: "K\u1EF3 xem",
    options: opts,
    value: month,
    onChange: setMonth
  });
}
function Pacing({
  month,
  link
}) {
  const p = K.period;
  if (month === 'all') return /*#__PURE__*/React.createElement(PacingBar, {
    tag: "To\xE0n k\u1EF3",
    share: 1,
    link: link,
    text: 'Toàn kỳ ' + p.from + ' – ' + p.to + ' · 230 ngày, trong đó tháng 8 chưa đủ ngày — dùng bảng ước tính khi so tháng.'
  });
  if (month !== '2026-08') return /*#__PURE__*/React.createElement(PacingBar, {
    tag: 'Đủ 31 ngày',
    share: 1,
    link: link,
    text: "Th\xE1ng \u0111\xE3 k\u1EBFt th\xFAc \u2014 s\u1ED1 li\u1EC7u \u0111\u1EA7y \u0111\u1EE7, kh\xF4ng c\u1EA7n \u01B0\u1EDBc t\xEDnh."
  });
  return /*#__PURE__*/React.createElement(PacingBar, {
    tag: 'Ngày ' + p.daysHas + '/' + p.daysAll,
    share: p.share,
    link: link,
    text: 'Còn 13 ngày · đã đi 58% tháng · hệ số ước tính cả tháng ×' + p.factor.toFixed(2)
  });
}
function OverviewScreen({
  month,
  setMonth,
  go
}) {
  const cur = useScope(month);
  const i = K.MONTHS.findIndex(m => m.key === month);
  const prev = i > 0 ? K.derive(K.agg([K.MONTHS[i - 1]])) : null;
  const kpi = (label, key, fmt, lowerBetter) => {
    let delta = '—',
      tone = 'neutral';
    if (prev && prev[key]) {
      const d = (cur[key] - prev[key]) / prev[key];
      delta = (d >= 0 ? '+' : '') + (d * 100).toFixed(1) + '%';
      tone = d >= 0 === !lowerBetter ? 'up' : 'down';
    }
    return /*#__PURE__*/React.createElement(KpiCard, {
      key: label,
      label: label,
      value: fmt(cur[key]),
      delta: delta,
      tone: tone,
      deltaNote: prev ? 'vs ' + K.MONTHS[i - 1].label : month === 'all' ? 'tổng 8 tháng' : 'không có kỳ trước'
    });
  };
  const maxW = K.CHANNELS[0].w;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    kicker: "Trang 01 \xB7 Ban l\xE3nh \u0111\u1EA1o",
    title: "T\u1ED5ng quan hi\u1EC7u su\u1EA5t",
    subtitle: /*#__PURE__*/React.createElement(React.Fragment, null, "Chi ph\xED, doanh thu v\xE0 hi\u1EC7u qu\u1EA3 to\xE0n k\xEAnh \u2014 ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-secondary)'
      }
    }, month === 'all' ? 'toàn kỳ 01/2026 – 18/08/2026' : month === '2026-08' ? 'tháng 8/2026 (1–18/08, chưa đủ tháng)' : 'tháng ' + month.slice(5) + '/2026')),
    right: /*#__PURE__*/React.createElement(ScopeChips, {
      month: month,
      setMonth: setMonth
    })
  }), /*#__PURE__*/React.createElement(Pacing, {
    month: month,
    link: /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go('ops');
      }
    }, "Xem c\u1EA3nh b\xE1o & ch\u1EA5t l\u01B0\u1EE3ng d\u1EEF li\u1EC7u \u2192")
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 'var(--space-3)'
    }
  }, kpi('Cost', 'cost', K.money, true), kpi('NMV', 'nmv', K.money, false), kpi('ROAS', 'roas', v => v.toFixed(1) + 'x', false), kpi('CIR', 'cir', v => K.pct(v, 2), true), kpi('Orders', 'orders', K.num, false), kpi('AOV', 'aov', K.money, false), kpi('CPO', 'cpo', K.money, true), kpi('Leads', 'leads', K.num, false), kpi('%NMV (NMV/GMV)', 'nmvRate', v => K.pct(v, 0), false), kpi('Hoàn / hủy đơn', 'cancel', v => K.pct(v, 1), true)), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.35fr 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-6)",
    gap: "var(--space-6)"
  }, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Chi ph\xED & NMV theo th\xE1ng",
    right: /*#__PURE__*/React.createElement(Legend, {
      items: [{
        color: 'var(--series-nmv)',
        label: 'NMV'
      }, {
        color: 'var(--series-cost)',
        label: 'Cost'
      }]
    })
  }), /*#__PURE__*/React.createElement(BarPairChart, {
    activeKey: month,
    data: K.MONTHS.map(m => ({
      key: m.key,
      label: m.label,
      subLabel: 'CIR ' + K.pct(m.cost / m.nmv, 1),
      topLabel: K.short(m.nmv),
      a: m.nmv,
      b: m.cost
    }))
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-6)",
    gap: "var(--space-6)"
  }, /*#__PURE__*/React.createElement(CardHeader, {
    title: "T\u1EF7 tr\u1ECDng theo k\xEAnh",
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: 'var(--text-faint)'
      }
    }, "NMV")
  }), K.CHANNELS.filter(c => c.core).map(c => /*#__PURE__*/React.createElement(ShareBar, {
    key: c.key,
    name: c.name,
    fill: c.fill,
    valueText: K.money(cur.nmv * c.w),
    shareText: K.pct(c.w, 0),
    share: c.w / maxW,
    meta: 'Cost ' + K.money(cur.cost * c.w * 1.05) + ' · CIR ' + K.pct(c.cir, 1) + ' · ' + K.num(cur.orders * c.w) + ' đơn'
  })), /*#__PURE__*/React.createElement(ShareBar, {
    name: "K\xEAnh kh\xE1c (6)",
    fill: "var(--channel-other)",
    valueText: "kh\xF4ng c\xF3 NMV",
    share: 0,
    meta: 'không có Spend · ' + K.num(cur.orders * 0.11) + ' đơn'
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Di\u1EC5n bi\u1EBFn theo ng\xE0y",
    note: "01/01 \u2013 18/08/2026 \xB7 NMV v\xE0 Cost \xB7 v\xF9ng s\xE1ng = k\u1EF3 \u0111ang xem"
  }), /*#__PURE__*/React.createElement(TrendLine, {
    series: [{
      values: K.days.map(d => d.nmv)
    }, {
      values: K.days.map(d => d.cost),
      color: 'var(--series-cost)',
      width: 1.2
    }],
    band: month === 'all' ? {
      from: 0,
      to: 1
    } : {
      from: i / 8,
      to: (i + 1) / 8
    },
    ticks: K.MONTHS.map((m, j) => ({
      at: j / 8,
      label: m.label.replace('*', '')
    }))
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement(CardHeader, {
    title: "B\u1EA3ng t\u1ED5ng h\u1EE3p theo k\xEAnh",
    right: /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go('channels');
      },
      style: {
        fontSize: 12.5
      }
    }, "Ph\xE2n t\xEDch s\xE2u theo k\xEAnh \u2192")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--color-accent)'
    }
  }, "Quy m\xF4"), /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 'ch',
      label: 'Kênh'
    }, {
      key: 'cost',
      label: 'Cost',
      align: 'right'
    }, {
      key: 'share',
      label: '%Cost',
      align: 'right'
    }, {
      key: 'nmv',
      label: 'NMV',
      align: 'right'
    }, {
      key: 'leads',
      label: 'Leads',
      align: 'right'
    }, {
      key: 'orders',
      label: 'Orders',
      align: 'right'
    }],
    rows: K.CHANNELS.map(c => ({
      ch: {
        value: c.name,
        color: c.core ? undefined : 'var(--text-muted)'
      },
      cost: c.core ? K.money(cur.cost * c.w * 1.05) : null,
      share: c.core ? {
        value: K.pct(c.w * 1.05, 1),
        bar: DataBar(c.w * 1.05)
      } : null,
      nmv: c.core ? K.money(cur.nmv * c.w) : null,
      leads: c.core ? K.num(cur.leads * c.w) : null,
      orders: K.num(cur.orders * c.w)
    }))
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--color-accent)'
    }
  }, "Hi\u1EC7u qu\u1EA3"), /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 'ch',
      label: 'Kênh'
    }, {
      key: 'roas',
      label: 'ROAS',
      align: 'right'
    }, {
      key: 'cir',
      label: 'CIR',
      align: 'right'
    }, {
      key: 'cpo',
      label: 'CPO',
      align: 'right'
    }, {
      key: 'aov',
      label: 'AOV',
      align: 'right'
    }, {
      key: 'skew',
      label: 'Lệch tỷ trọng',
      align: 'right'
    }],
    rows: K.CHANNELS.map(c => {
      const skew = c.core ? c.w * 1.05 - c.w : null;
      return {
        ch: {
          value: c.name,
          color: c.core ? undefined : 'var(--text-muted)'
        },
        roas: c.core ? (1 / c.cir).toFixed(1) + 'x' : null,
        cir: c.core ? {
          value: K.pct(c.cir, 2),
          color: c.cir > 0.08 ? 'var(--text-negative)' : undefined
        } : null,
        cpo: c.core ? K.money(cur.cost * c.w * 1.05 / (cur.orders * c.w)) : null,
        aov: c.core ? K.money(cur.nmv * c.w / (cur.orders * c.w)) : null,
        skew: skew == null ? null : {
          value: (skew >= 0 ? '+' : '−') + Math.abs(skew * 100).toFixed(1) + ' đ%',
          color: skew > 0.01 ? 'var(--text-negative)' : 'var(--text-positive)',
          bar: DataBar(Math.abs(skew) * 8, skew > 0 ? 'up' : 'down')
        }
      };
    })
  }))), /*#__PURE__*/React.createElement(Footnote, null, "L\u1EC7ch t\u1EF7 tr\u1ECDng = %Cost \u2212 %NMV (\u0111i\u1EC3m ph\u1EA7n tr\u0103m). K\xEAnh kh\xF4ng c\xF3 Spend ho\u1EB7c NMV \u0111\u1EC3 tr\u1ED1ng thay v\xEC t\xEDnh b\u1EB1ng 0.")));
}
function ChannelsScreen({
  month,
  setMonth,
  go
}) {
  const cur = useScope(month);
  const core = K.CHANNELS.filter(c => c.core);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    kicker: "Trang 02 \xB7 Tr\u01B0\u1EDFng ph\xF2ng",
    title: "Ph\xE2n t\xEDch theo k\xEAnh",
    subtitle: "C\u1EA5u tr\xFAc chi ph\xED, hi\u1EC7u qu\u1EA3 t\u1EEBng k\xEAnh v\xE0 ph\u1EA7n \u0111\xF3ng g\xF3p doanh thu",
    right: /*#__PURE__*/React.createElement(ScopeChips, {
      month: month,
      setMonth: setMonth
    })
  }), /*#__PURE__*/React.createElement(Pacing, {
    month: month
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-3)'
    }
  }, core.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.key,
    padding: "var(--space-4)",
    gap: "var(--space-2)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: 2,
      background: c.fill,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, c.name), /*#__PURE__*/React.createElement(Tag, {
    tone: c.cir > 0.08 ? 'alert' : 'good',
    style: {
      marginLeft: 'auto'
    }
  }, c.cir > 0.08 ? 'Cảnh báo' : 'Đạt')), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      font: '700 22px/1.05 var(--font-heading)'
    }
  }, K.money(cur.nmv * c.w)), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 11.5,
      color: 'var(--text-muted)'
    }
  }, "Cost ", K.money(cur.cost * c.w * 1.05), " \xB7 CIR ", K.pct(c.cir, 1), " \xB7 ROAS ", (1 / c.cir).toFixed(1), "x")))), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement(CardHeader, {
    title: "12 k\xEAnh \u2014 quy m\xF4 v\xE0 hi\u1EC7u qu\u1EA3",
    note: "S\u1EAFp theo chi ph\xED; 8 k\xEAnh ngo\xE0i nh\xF3m l\xF5i kh\xF4ng c\xF3 c\u1ED9t Spend"
  }), /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 'ch',
      label: 'Kênh'
    }, {
      key: 'cost',
      label: 'Cost',
      align: 'right'
    }, {
      key: 'nmv',
      label: 'NMV',
      align: 'right'
    }, {
      key: 'gmv',
      label: 'GMV',
      align: 'right'
    }, {
      key: 'orders',
      label: 'Orders',
      align: 'right'
    }, {
      key: 'cir',
      label: 'CIR',
      align: 'right'
    }, {
      key: 'cpo',
      label: 'CPO',
      align: 'right'
    }, {
      key: 'aov',
      label: 'AOV',
      align: 'right'
    }],
    rows: K.CHANNELS.map(c => ({
      ch: {
        value: c.name,
        color: c.core ? undefined : 'var(--text-muted)'
      },
      cost: c.core ? {
        value: K.money(cur.cost * c.w * 1.05),
        bar: DataBar(c.w * 1.05)
      } : null,
      nmv: c.core ? K.money(cur.nmv * c.w) : null,
      gmv: c.core ? K.money(cur.gmv * c.w) : null,
      orders: K.num(cur.orders * c.w),
      cir: c.core ? {
        value: K.pct(c.cir, 2),
        color: c.cir > 0.08 ? 'var(--text-negative)' : undefined
      } : null,
      cpo: c.core ? K.money(cur.cost * c.w * 1.05 / (cur.orders * c.w)) : null,
      aov: c.core ? K.money(cur.nmv * c.w / (cur.orders * c.w)) : null
    }))
  }), /*#__PURE__*/React.createElement(Footnote, {
    divided: true
  }, "C\u1ED9t \"cost\" trong sheet All Data c\u1EE7a 8 k\xEAnh ngo\xE0i nh\xF3m l\xF5i tr\xF9ng kh\xEDt c\u1ED9t GMV n\xEAn kh\xF4ng \u0111\u01B0\u1EE3c d\xF9ng l\xE0m chi ph\xED.")), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-6)",
    gap: "var(--space-6)"
  }, /*#__PURE__*/React.createElement(CardHeader, {
    title: "T\u1EF7 tr\u1ECDng chi ph\xED",
    note: "Ph\u1EA7n ng\xE2n s\xE1ch m\u1ED7i k\xEAnh chi\u1EBFm trong k\u1EF3 \u0111ang xem"
  }), core.map(c => /*#__PURE__*/React.createElement(ShareBar, {
    key: c.key,
    name: c.name,
    fill: c.fill,
    share: c.w / core[0].w,
    valueText: K.money(cur.cost * c.w * 1.05),
    shareText: K.pct(c.w * 1.05, 0)
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-6)",
    gap: "var(--space-6)"
  }, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Ph\u1EC5u Leads \u2192 Orders \u2192 NMV",
    note: "Ch\u1EC9 4 k\xEAnh c\xF3 ghi nh\u1EADn Leads"
  }), core.map(c => /*#__PURE__*/React.createElement(FunnelRow, {
    key: c.key,
    name: c.name,
    rates: 'Chốt đơn ' + K.pct(cur.orders / cur.leads, 0),
    steps: [{
      share: c.w / core[0].w,
      text: K.num(cur.leads * c.w) + ' leads',
      fill: c.fill
    }, {
      share: c.w / core[0].w * 0.42,
      text: K.num(cur.orders * c.w) + ' đơn'
    }, {
      share: c.w / core[0].w * 0.31,
      text: K.money(cur.nmv * c.w),
      fill: 'var(--color-neutral-700)'
    }]
  })))));
}
function EfficiencyScreen({
  month,
  setMonth,
  go
}) {
  const cur = useScope(month);
  const core = K.CHANNELS.filter(c => c.core);
  const dots = [];
  K.MONTHS.forEach((m, i) => core.forEach(c => dots.push({
    x: 0.1 + m.cost * c.w / 4e8,
    y: c.cir * 2.6 + i % 3 * 0.05,
    r: 3 + c.w * 10,
    fill: c.fill
  })));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    kicker: "Trang 07 \xB7 Chuy\xEAn vi\xEAn v\u1EADn h\xE0nh",
    title: "Hi\u1EC7u qu\u1EA3 chi ph\xED & ph\u1EC5u",
    subtitle: "CIR, CPO, CPL \u0111\u1EB7t c\u1EA1nh ng\u01B0\u1EE1ng m\u1EE5c ti\xEAu; ph\u1EC5u cho 4 k\xEAnh c\xF3 \u0111\u1EE7 ch\u1EC9 s\u1ED1",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-2)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => go('channels')
    }, "\u2190 Ph\xE2n t\xEDch theo k\xEAnh"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => go('ops')
    }, "C\u1EA3nh b\xE1o \u2192"))
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(TargetCard, {
    label: "CIR to\xE0n k\xEAnh",
    target: "MT 8%",
    actual: K.pct(cur.cir, 2),
    gap: '+' + ((cur.cir - 0.08) * 100).toFixed(2) + ' đ%',
    share: Math.min(cur.cir / 0.1, 1),
    mark: 0.8,
    tone: cur.cir > 0.08 ? 'alert' : 'good',
    note: "V\u01B0\u1EE3t ng\u01B0\u1EE1ng \u2014 Tiktok Shop \u0111\xF3ng g\xF3p ph\u1EA7n l\u1EDBn ph\u1EA7n v\u01B0\u1EE3t."
  }), /*#__PURE__*/React.createElement(TargetCard, {
    label: "CPO to\xE0n k\xEAnh",
    target: "MT 16K\u20AB",
    actual: K.money(cur.cpo),
    gap: '−' + K.short(16000 - cur.cpo) + '₫',
    share: cur.cpo / 20000,
    mark: 0.8,
    note: "Trong ng\u01B0\u1EE1ng \u1EDF c\u1EA3 8 th\xE1ng."
  }), /*#__PURE__*/React.createElement(TargetCard, {
    label: "CPL to\xE0n k\xEAnh",
    target: "MT 8K\u20AB",
    actual: K.money(cur.cpl),
    gap: '−' + K.short(8000 - cur.cpl) + '₫',
    share: cur.cpl / 10000,
    mark: 0.8,
    note: "Lead ch\u1EC9 \u0111\u01B0\u1EE3c ghi nh\u1EADn \u1EDF 4 k\xEAnh l\xF5i."
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Benchmark theo k\xEAnh \u2014 l\u0169y k\u1EBF to\xE0n k\u1EF3",
    note: "\u0110\u1EA1t / C\u1EA3nh b\xE1o t\xEDnh theo ng\u01B0\u1EE1ng \u1EDF ba th\u1EBB tr\xEAn"
  }), /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 'ch',
      label: 'Kênh'
    }, {
      key: 'cost',
      label: 'Cost',
      align: 'right'
    }, {
      key: 'orders',
      label: 'Orders',
      align: 'right'
    }, {
      key: 'cir',
      label: 'CIR',
      align: 'right'
    }, {
      key: 'cpo',
      label: 'CPO',
      align: 'right'
    }, {
      key: 'cpl',
      label: 'CPL',
      align: 'right'
    }, {
      key: 'aov',
      label: 'AOV',
      align: 'right'
    }, {
      key: 'status',
      label: 'Trạng thái',
      align: 'right'
    }],
    rows: core.map(c => ({
      ch: c.name,
      cost: K.money(cur.cost * c.w * 1.05),
      orders: K.num(cur.orders * c.w),
      cir: {
        value: K.pct(c.cir, 2),
        color: c.cir > 0.08 ? 'var(--text-negative)' : undefined
      },
      cpo: K.money(cur.cost * c.w * 1.05 / (cur.orders * c.w)),
      cpl: K.money(cur.cost * c.w * 1.05 / (cur.leads * c.w)),
      aov: K.money(cur.nmv * c.w / (cur.orders * c.w)),
      status: /*#__PURE__*/React.createElement(Tag, {
        tone: c.cir > 0.08 ? 'alert' : 'good'
      }, c.cir > 0.08 ? 'Cảnh báo' : 'Đạt')
    }))
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Chi ph\xED th\xE1ng so v\u1EDBi CIR",
    note: "M\u1ED7i \u0111i\u1EC3m l\xE0 m\u1ED9t k\xEAnh trong m\u1ED9t th\xE1ng \xB7 \u0111\u01B0\u1EDDng ngang: ng\u01B0\u1EE1ng 8%"
  }), /*#__PURE__*/React.createElement(ScatterPlot, {
    points: dots,
    target: 0.21,
    note: "K\xEDch th\u01B0\u1EDBc \u0111i\u1EC3m = s\u1ED1 \u0111\u01A1n",
    yTicks: [{
      at: 0.26,
      label: '10%'
    }, {
      at: 0.52,
      label: '20%'
    }, {
      at: 0.78,
      label: '30%'
    }],
    xTicks: [{
      at: 0.25,
      label: '50M'
    }, {
      at: 0.5,
      label: '100M'
    }, {
      at: 0.75,
      label: '150M'
    }]
  }), /*#__PURE__*/React.createElement(Legend, {
    shape: "dot",
    items: core.map(c => ({
      color: c.fill,
      label: c.name
    }))
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-6)",
    gap: "var(--space-6)"
  }, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Ph\u1EC5u Leads \u2192 Orders \u2192 NMV",
    note: "L\u0169y k\u1EBF to\xE0n k\u1EF3"
  }), core.map(c => /*#__PURE__*/React.createElement(FunnelRow, {
    key: c.key,
    name: c.name,
    rates: 'CVR ' + K.pct(0.018 + c.w / 40, 1),
    steps: [{
      share: c.w / core[0].w,
      text: K.num(cur.leads * c.w) + ' leads',
      fill: c.fill
    }, {
      share: c.w / core[0].w * 0.42,
      text: K.num(cur.orders * c.w) + ' đơn'
    }, {
      share: c.w / core[0].w * 0.31,
      text: K.money(cur.nmv * c.w),
      fill: 'var(--color-neutral-700)'
    }]
  })), /*#__PURE__*/React.createElement(Footnote, {
    divided: true
  }, "Facebook v\xE0 Google ch\u1ED1t \u0111\u01A1n tr\xEAn lead cao nh\u1EA5t nh\u01B0ng quy m\xF4 lead r\u1EA5t nh\u1ECF."))));
}
function OpsScreen({
  go
}) {
  const [dlg, setDlg] = React.useState(false);
  const counters = [['Kênh có đủ chỉ số', '4 / 12', 'var(--color-accent)'], ['Ngày thiếu dữ liệu', '0', 'var(--text-positive)'], ['Ngày chi phí bất thường', '6', 'var(--text-negative)'], ['Tháng chưa đủ ngày', '1', 'var(--text-negative)']];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    kicker: "Trang 09 \xB7 Ki\u1EC3m so\xE1t",
    title: "C\u1EA3nh b\xE1o & ch\u1EA5t l\u01B0\u1EE3ng d\u1EEF li\u1EC7u",
    subtitle: "Nh\u1EEFng g\xEC c\u1EA7n ki\u1EC3m tra tr\u01B0\u1EDBc khi \u0111\u01B0a s\u1ED1 ra b\xE1o c\xE1o, v\xE0 c\xE1ch m\u1ED7i ch\u1EC9 s\u1ED1 \u0111\u01B0\u1EE3c t\xEDnh",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-2)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => go('overview')
    }, "\u2190 T\u1ED5ng quan"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => setDlg(true)
    }, "Xu\u1EA5t b\xE1o c\xE1o"))
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-3)'
    }
  }, counters.map(([l, v, c]) => /*#__PURE__*/React.createElement(Card, {
    key: l,
    padding: "var(--space-4)",
    gap: "var(--space-1)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      font: '700 26px/1.1 var(--font-heading)',
      color: c
    }
  }, v)))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement(CardHeader, {
    title: "B\u1EA5t th\u01B0\u1EDDng c\u1EA7n ki\u1EC3m tra",
    note: "T\u1EF1 sinh t\u1EEB d\u1EEF li\u1EC7u, x\u1EBFp theo m\u1EE9c \u1EA3nh h\u01B0\u1EDFng"
  }), /*#__PURE__*/React.createElement(AlertRow, {
    level: "Nghi\xEAm tr\u1ECDng",
    title: "Tiktok Shop v\u01B0\u1EE3t ng\u01B0\u1EE1ng CIR 3 th\xE1ng li\xEAn ti\u1EBFp",
    detail: "T6 22.8% \xB7 T7 24.1% \xB7 T8 (1\u201318) 25.2% \u2014 ng\u01B0\u1EE1ng 8%"
  }), /*#__PURE__*/React.createElement(AlertRow, {
    level: "Nghi\xEAm tr\u1ECDng",
    title: "Th\xE1ng 8 ch\u1EC9 c\xF3 18/31 ng\xE0y",
    detail: "M\u1ECDi so s\xE1nh th\xE1ng ph\u1EA3i d\xF9ng run-rate \xD71.72 ho\u1EB7c b\xECnh qu\xE2n/ng\xE0y"
  }), /*#__PURE__*/React.createElement(AlertRow, {
    level: "Ch\xFA \xFD",
    tone: "info",
    title: "8 k\xEAnh kh\xF4ng c\xF3 c\u1ED9t Spend",
    detail: "Kh\xF4ng t\xEDnh CIR/CPO/CPL/ROAS cho Lazada, Droppii, Livestream, Tiki, Zalo, Phone, VNShop, Thu 1 \u0111\u1ED5i 1"
  }), /*#__PURE__*/React.createElement(AlertRow, {
    level: "Ch\xFA \xFD",
    tone: "info",
    title: "T\u1EF7 l\u1EC7 h\u1EE7y \u0111\u01A1n 42.2% theo doanh thu",
    detail: "33.3% theo s\u1ED1 \u0111\u01A1n \u2014 t\xEDnh tr\xEAn c\u1EA3 hai tr\u1EA1ng th\xE1i \u0111\u01A1n"
  }), /*#__PURE__*/React.createElement(AlertRow, {
    level: "\u0110\xE3 ki\u1EC3m",
    tone: "ok",
    title: "T\u1ED5ng spend kh\u1EDBp Report Total",
    detail: "2.02B\u20AB to\xE0n k\u1EF3, kh\u1EDBp sheet \u0111\u1ED1i chi\u1EBFu"
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Ng\xE0y chi ph\xED cao b\u1EA5t th\u01B0\u1EDDng",
    note: "Chi ph\xED ng\xE0y > trung b\xECnh + 2 l\u1EA7n \u0111\u1ED9 l\u1EC7ch chu\u1EA9n"
  }), /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 'd',
      label: 'Ngày'
    }, {
      key: 'cost',
      label: 'Cost',
      align: 'right'
    }, {
      key: 'nmv',
      label: 'NMV',
      align: 'right'
    }, {
      key: 'orders',
      label: 'Orders',
      align: 'right'
    }, {
      key: 'ratio',
      label: 'so với TB ngày',
      align: 'right'
    }],
    rows: [['09/06', '24.1M₫', '188M₫', '842', '×2.6'], ['15/07', '22.8M₫', '201M₫', '904', '×2.4'], ['07/07', '21.2M₫', '175M₫', '781', '×2.2'], ['09/08', '20.9M₫', '212M₫', '951', '×2.2'], ['15/08', '19.4M₫', '198M₫', '888', '×2.1'], ['09/05', '18.7M₫', '166M₫', '742', '×2.0']].map(r => ({
      d: r[0],
      cost: {
        value: r[1],
        color: 'var(--text-negative)'
      },
      nmv: r[2],
      orders: r[3],
      ratio: {
        value: r[4],
        color: 'var(--color-accent-300)'
      }
    }))
  }), /*#__PURE__*/React.createElement(Footnote, {
    divided: true
  }, "C\xE1c ng\xE0y n\xE0y tr\xF9ng ng\xE0y sale s\xE0n (9/9, 15/8\u2026) \u2014 kh\xF4ng coi l\xE0 l\u1ED7i d\u1EEF li\u1EC7u."))), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement(CardHeader, {
    title: "T\u1EEB \u0111i\u1EC3n ch\u1EC9 s\u1ED1",
    note: "\u0110\xFAng theo c\xF4ng th\u1EE9c trong sheet g\u1ED1c"
  }), /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 'm',
      label: 'Chỉ số'
    }, {
      key: 'f',
      label: 'Công thức'
    }, {
      key: 'n',
      label: 'Ghi chú',
      wrap: true
    }],
    rows: [{
      m: 'CIR',
      f: 'Cost / NMV',
      n: 'Chỉ tính cho 4 kênh có Spend'
    }, {
      m: 'ROAS',
      f: 'NMV / Cost',
      n: 'Nghịch đảo của CIR'
    }, {
      m: 'AOV',
      f: 'NMV / Orders',
      n: 'Không loại đơn hủy'
    }, {
      m: 'CPO',
      f: 'Cost / Orders',
      n: '—'
    }, {
      m: 'CPL',
      f: 'Cost / Leads',
      n: 'Leads chỉ có ở 4 kênh lõi'
    }, {
      m: 'Lệch tỷ trọng',
      f: '%Cost − %NMV',
      n: 'Điểm phần trăm; dương = ăn ngân sách nhiều hơn phần đóng góp'
    }]
  })), dlg && /*#__PURE__*/React.createElement(Dialog, {
    title: "Xu\u1EA5t b\xE1o c\xE1o",
    onDismiss: () => setDlg(false),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setDlg(false)
    }, "H\u1EE7y"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => setDlg(false)
    }, "Xu\u1EA5t"))
  }, "B\u1EA3n xu\u1EA5t gi\u1EEF nguy\xEAn k\u1EF3 \u0111ang xem v\xE0 ghi r\xF5 th\xE1ng 8 ch\u1EC9 c\xF3 18/31 ng\xE0y."));
}
const PAGES = [{
  id: 'overview',
  label: 'Tổng quan',
  Screen: OverviewScreen
}, {
  id: 'channels',
  label: 'Phân tích theo kênh',
  Screen: ChannelsScreen
}, {
  id: 'efficiency',
  label: 'Hiệu quả chi phí',
  Screen: EfficiencyScreen
}, {
  id: 'ops',
  label: 'Cảnh báo & Định nghĩa',
  Screen: OpsScreen
}];
function App() {
  const [page, setPage] = React.useState('overview');
  const [month, setMonth] = React.useState('2026-08');
  const Screen = PAGES.find(p => p.id === page).Screen;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(NavRail, {
    items: PAGES,
    active: page,
    onSelect: setPage,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        letterSpacing: 'var(--tracking-kicker)',
        textTransform: 'uppercase',
        color: 'var(--text-faint)'
      }
    }, "K\u1EF3 d\u1EEF li\u1EC7u"), /*#__PURE__*/React.createElement("div", {
      className: "tabular",
      style: {
        fontSize: 12.5,
        color: 'var(--text-secondary)'
      }
    }, "01/01/2026 \u2013 18/08/2026"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: 'var(--text-faint)',
        lineHeight: 1.45
      }
    }, "Ngu\u1ED3n: BlueStone Perfomance Remake.xlsx \u2014 sheet ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--color-neutral-400)'
      }
    }, "All Data")))
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 'var(--main-min-width)',
      padding: 'var(--space-8) var(--space-8) 64px',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Screen, {
    month: month,
    setMonth: setMonth,
    go: setPage
  })));
}
Object.assign(window, {
  App,
  PAGES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/performance_dashboard/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/performance_dashboard/data.js
try { (() => {
// Stand-in figures shaped like the real report extract (window.BS in the source project).
window.KIT = function () {
  const MONTHS = [{
    key: '2026-01',
    label: 'T1',
    cost: 181e6,
    nmv: 2.11e9,
    orders: 10240,
    leads: 26400,
    gmv: 3.02e9
  }, {
    key: '2026-02',
    label: 'T2',
    cost: 224e6,
    nmv: 2.58e9,
    orders: 12010,
    leads: 29800,
    gmv: 3.71e9
  }, {
    key: '2026-03',
    label: 'T3',
    cost: 252e6,
    nmv: 3.04e9,
    orders: 13960,
    leads: 33100,
    gmv: 4.38e9
  }, {
    key: '2026-04',
    label: 'T4',
    cost: 241e6,
    nmv: 2.82e9,
    orders: 12880,
    leads: 31500,
    gmv: 4.09e9
  }, {
    key: '2026-05',
    label: 'T5',
    cost: 289e6,
    nmv: 3.38e9,
    orders: 15320,
    leads: 36700,
    gmv: 4.92e9
  }, {
    key: '2026-06',
    label: 'T6',
    cost: 312e6,
    nmv: 3.61e9,
    orders: 16410,
    leads: 38900,
    gmv: 5.24e9
  }, {
    key: '2026-07',
    label: 'T7',
    cost: 338e6,
    nmv: 4.12e9,
    orders: 18720,
    leads: 43200,
    gmv: 5.98e9
  }, {
    key: '2026-08',
    label: 'T8*',
    cost: 189e6,
    nmv: 2.98e9,
    orders: 13790,
    leads: 31200,
    gmv: 4.31e9,
    partial: true
  }];
  const CHANNELS = [{
    key: 'shopee',
    name: 'Shopee',
    fill: 'var(--channel-shopee)',
    core: true,
    w: 0.54,
    cir: 0.090
  }, {
    key: 'tiktok',
    name: 'Tiktok Shop',
    fill: 'var(--channel-tiktok)',
    core: true,
    w: 0.19,
    cir: 0.252
  }, {
    key: 'facebook',
    name: 'Facebook',
    fill: 'var(--channel-facebook)',
    core: true,
    w: 0.09,
    cir: 0.164
  }, {
    key: 'google',
    name: 'Google',
    fill: 'var(--channel-google)',
    core: true,
    w: 0.06,
    cir: 0.121
  }, {
    key: 'lazada',
    name: 'Lazada',
    fill: 'var(--channel-other)',
    core: false,
    w: 0.05
  }, {
    key: 'droppii',
    name: 'Droppii',
    fill: 'var(--channel-other)',
    core: false,
    w: 0.03
  }, {
    key: 'live',
    name: 'Livestream',
    fill: 'var(--channel-other)',
    core: false,
    w: 0.02
  }, {
    key: 'tiki',
    name: 'Tiki',
    fill: 'var(--channel-other)',
    core: false,
    w: 0.01
  }, {
    key: 'zalo',
    name: 'Zalo',
    fill: 'var(--channel-other)',
    core: false,
    w: 0.007
  }, {
    key: 'phone',
    name: 'Phone',
    fill: 'var(--channel-other)',
    core: false,
    w: 0.005
  }];
  const days = [];
  for (let i = 0; i < 230; i++) {
    days.push({
      nmv: 78e6 + 26e6 * Math.sin(i / 8.5) + i * 42e4 + (i % 30 === 8 ? 52e6 : 0),
      cost: 6.2e6 + 1.9e6 * Math.cos(i / 6) + i * 2.1e4
    });
  }
  const short = v => v == null ? '—' : v >= 1e9 ? (v / 1e9).toFixed(2) + 'B' : v >= 1e6 ? (v / 1e6).toFixed(0) + 'M' : v >= 1e3 ? (v / 1e3).toFixed(1) + 'K' : String(Math.round(v));
  const num = v => v == null ? '—' : Math.round(v).toLocaleString('en-US');
  const pct = (v, d) => v == null ? '—' : (v * 100).toFixed(d === undefined ? 1 : d) + '%';
  const money = v => v == null ? '—' : short(v) + '₫';
  const agg = ms => ms.reduce((a, m) => ({
    cost: a.cost + m.cost,
    nmv: a.nmv + m.nmv,
    gmv: a.gmv + m.gmv,
    orders: a.orders + m.orders,
    leads: a.leads + m.leads
  }), {
    cost: 0,
    nmv: 0,
    gmv: 0,
    orders: 0,
    leads: 0
  });
  const derive = a => Object.assign({}, a, {
    cir: a.cost / a.nmv,
    roas: a.nmv / a.cost,
    aov: a.nmv / a.orders,
    cpo: a.cost / a.orders,
    cpl: a.cost / a.leads,
    nmvRate: a.nmv / a.gmv,
    cancel: 1 - a.orders / a.leads
  });
  return {
    MONTHS,
    CHANNELS,
    days,
    short,
    num,
    pct,
    money,
    agg,
    derive,
    period: {
      from: '01/01/2026',
      to: '18/08/2026',
      daysHas: 18,
      daysAll: 31,
      factor: 1.72,
      share: 0.58
    }
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/performance_dashboard/data.js", error: String((e && e.message) || e) }); }

__ds_ns.BarPairChart = __ds_scope.BarPairChart;

__ds_ns.FunnelRow = __ds_scope.FunnelRow;

__ds_ns.Legend = __ds_scope.Legend;

__ds_ns.ScatterPlot = __ds_scope.ScatterPlot;

__ds_ns.ShareBar = __ds_scope.ShareBar;

__ds_ns.TrendLine = __ds_scope.TrendLine;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.DataBar = __ds_scope.DataBar;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.AlertRow = __ds_scope.AlertRow;

__ds_ns.FilterChips = __ds_scope.FilterChips;

__ds_ns.Footnote = __ds_scope.Footnote;

__ds_ns.KpiCard = __ds_scope.KpiCard;

__ds_ns.NavRail = __ds_scope.NavRail;

__ds_ns.PacingBar = __ds_scope.PacingBar;

__ds_ns.PageHeader = __ds_scope.PageHeader;

__ds_ns.TargetCard = __ds_scope.TargetCard;

})();
