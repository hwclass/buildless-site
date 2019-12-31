/*
 *          __        ___
 *    _____/ /___  __/ (_)____
 *   / ___/ __/ / / / / / ___/
 *  (__  ) /_/ /_/ / / (__  )
 * /____/\__/\__, /_/_/____/
 *          /____/
 *
 * light - weight css preprocessor @licence MIT
 */
var stylis = a => {
  var r = /^\0+/g,
    c = /[\0\r\f]/g,
    s = /: */g,
    t = /zoo|gra/,
    i = /([,: ])(transform)/g,
    f = /,+\s*(?![^(]*[)])/g,
    n = / +\s*(?![^(]*[)])/g,
    l = / *[\0] */g,
    o = /,\r+?/g,
    h = /([\t\r\n ])*\f?&/g,
    u = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,
    d = /\W+/g,
    b = /@(k\w+)\s*(\S*)\s*/,
    p = /::(place)/g,
    k = /:(read-only)/g,
    g = /\s+(?=[{\];=:>])/g,
    A = /([[}=:>])\s+/g,
    C = /(\{[^{]+?);(?=\})/g,
    w = /\s{2,}/g,
    v = /([^\(])(:+) */g,
    m = /[svh]\w+-[tblr]{2}/,
    x = /\(\s*(.*)\s*\)/g,
    $ = /([\s\S]*?);/g,
    y = /-self|flex-/g,
    O = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    j = /stretch|:\s*\w+\-(?:conte|avail)/,
    z = /([^-])(image-set\()/,
    N = '-webkit-',
    S = '-moz-',
    F = '-ms-',
    W = 59,
    q = 125,
    B = 123,
    D = 40,
    E = 41,
    G = 91,
    H = 93,
    I = 10,
    J = 13,
    K = 9,
    L = 64,
    M = 32,
    P = 38,
    Q = 45,
    R = 95,
    T = 42,
    U = 44,
    V = 58,
    X = 39,
    Y = 34,
    Z = 47,
    _ = 62,
    ee = 43,
    ae = 126,
    re = 0,
    ce = 12,
    se = 11,
    te = 107,
    ie = 109,
    fe = 115,
    ne = 112,
    le = 111,
    oe = 105,
    he = 99,
    ue = 100,
    de = 112,
    be = 1,
    pe = 1,
    ke = 0,
    ge = 1,
    Ae = 1,
    Ce = 1,
    we = 0,
    ve = 0,
    me = 0,
    xe = [],
    $e = [],
    ye = 0,
    Oe = null,
    je = -2,
    ze = -1,
    Ne = 0,
    Se = 1,
    Fe = 2,
    We = 3,
    qe = 0,
    Be = 1,
    De = '',
    Ee = '',
    Ge = '';
  function He(e, a, s, t, i) {
    for (
      var f,
        n,
        o = 0,
        h = 0,
        u = 0,
        d = 0,
        g = 0,
        A = 0,
        C = 0,
        w = 0,
        m = 0,
        $ = 0,
        y = 0,
        O = 0,
        j = 0,
        z = 0,
        R = 0,
        we = 0,
        $e = 0,
        Oe = 0,
        je = 0,
        ze = s.length,
        Je = ze - 1,
        Re = '',
        Te = '',
        Ue = '',
        Ve = '',
        Xe = '',
        Ye = '';
      R < ze;

    ) {
      if (((C = s.charCodeAt(R)), R === Je))
        if (h + d + u + o !== 0) {
          if (0 !== h) C = h === Z ? I : Z;
          (d = u = o = 0), ze++, Je++;
        }
      if (h + d + u + o === 0) {
        if (R === Je) {
          if (we > 0) Te = Te.replace(c, '');
          if (Te.trim().length > 0) {
            switch (C) {
              case M:
              case K:
              case W:
              case J:
              case I:
                break;
              default:
                Te += s.charAt(R);
            }
            C = W;
          }
        }
        if (1 === $e)
          switch (C) {
            case B:
            case q:
            case W:
            case Y:
            case X:
            case D:
            case E:
            case U:
              $e = 0;
            case K:
            case J:
            case I:
            case M:
              break;
            default:
              for ($e = 0, je = R, g = C, R--, C = W; je < ze; )
                switch (s.charCodeAt(je++)) {
                  case I:
                  case J:
                  case W:
                    ++R, (C = g), (je = ze);
                    break;
                  case V:
                    if (we > 0) ++R, (C = g);
                  case B:
                    je = ze;
                }
          }
        switch (C) {
          case B:
            for (
              g = (Te = Te.trim()).charCodeAt(0), y = 1, je = ++R;
              R < ze;

            ) {
              switch ((C = s.charCodeAt(R))) {
                case B:
                  y++;
                  break;
                case q:
                  y--;
                  break;
                case Z:
                  switch ((A = s.charCodeAt(R + 1))) {
                    case T:
                    case Z:
                      R = Qe(A, R, Je, s);
                  }
                  break;
                case G:
                  C++;
                case D:
                  C++;
                case Y:
                case X:
                  for (; R++ < Je && s.charCodeAt(R) !== C; );
              }
              if (0 === y) break;
              R++;
            }
            if (((Ue = s.substring(je, R)), g === re))
              g = (Te = Te.replace(r, '').trim()).charCodeAt(0);
            switch (g) {
              case L:
                if (we > 0) Te = Te.replace(c, '');
                switch ((A = Te.charCodeAt(1))) {
                  case ue:
                  case ie:
                  case fe:
                  case Q:
                    f = a;
                    break;
                  default:
                    f = xe;
                }
                if (
                  ((je = (Ue = He(a, f, Ue, A, i + 1)).length),
                  me > 0 && 0 === je)
                )
                  je = Te.length;
                if (ye > 0)
                  if (
                    ((f = Ie(xe, Te, Oe)),
                    (n = Pe(We, Ue, f, a, pe, be, je, A, i, t)),
                    (Te = f.join('')),
                    void 0 !== n)
                  )
                    if (0 === (je = (Ue = n.trim()).length)) (A = 0), (Ue = '');
                if (je > 0)
                  switch (A) {
                    case fe:
                      Te = Te.replace(x, Me);
                    case ue:
                    case ie:
                    case Q:
                      Ue = Te + '{' + Ue + '}';
                      break;
                    case te:
                      if (
                        ((Ue =
                          (Te = Te.replace(b, '$1 $2' + (Be > 0 ? De : ''))) +
                          '{' +
                          Ue +
                          '}'),
                        1 === Ae || (2 === Ae && Le('@' + Ue, 3)))
                      )
                        Ue = '@' + N + Ue + '@' + Ue;
                      else Ue = '@' + Ue;
                      break;
                    default:
                      if (((Ue = Te + Ue), t === de)) (Ve += Ue), (Ue = '');
                  }
                else Ue = '';
                break;
              default:
                Ue = He(a, Ie(a, Te, Oe), Ue, t, i + 1);
            }
            (Xe += Ue),
              (O = 0),
              ($e = 0),
              (z = 0),
              (we = 0),
              (Oe = 0),
              (j = 0),
              (Te = ''),
              (Ue = ''),
              (C = s.charCodeAt(++R));
            break;
          case q:
          case W:
            if (
              (je = (Te = (we > 0 ? Te.replace(c, '') : Te).trim()).length) > 1
            ) {
              if (0 === z)
                if ((g = Te.charCodeAt(0)) === Q || (g > 96 && g < 123))
                  je = (Te = Te.replace(' ', ':')).length;
              if (ye > 0)
                if (
                  void 0 !== (n = Pe(Se, Te, a, e, pe, be, Ve.length, t, i, t))
                )
                  if (0 === (je = (Te = n.trim()).length)) Te = '\0\0';
              switch (((g = Te.charCodeAt(0)), (A = Te.charCodeAt(1)), g)) {
                case re:
                  break;
                case L:
                  if (A === oe || A === he) {
                    Ye += Te + s.charAt(R);
                    break;
                  }
                default:
                  if (Te.charCodeAt(je - 1) === V) break;
                  Ve += Ke(Te, g, A, Te.charCodeAt(2));
              }
            }
            (O = 0),
              ($e = 0),
              (z = 0),
              (we = 0),
              (Oe = 0),
              (Te = ''),
              (C = s.charCodeAt(++R));
        }
      }
      switch (C) {
        case J:
        case I:
          if (h + d + u + o + ve === 0)
            switch ($) {
              case E:
              case X:
              case Y:
              case L:
              case ae:
              case _:
              case T:
              case ee:
              case Z:
              case Q:
              case V:
              case U:
              case W:
              case B:
              case q:
                break;
              default:
                if (z > 0) $e = 1;
            }
          if (h === Z) h = 0;
          else if (ge + O === 0 && t !== te && Te.length > 0)
            (we = 1), (Te += '\0');
          if (ye * qe > 0) Pe(Ne, Te, a, e, pe, be, Ve.length, t, i, t);
          (be = 1), pe++;
          break;
        case W:
        case q:
          if (h + d + u + o === 0) {
            be++;
            break;
          }
        default:
          switch ((be++, (Re = s.charAt(R)), C)) {
            case K:
            case M:
              if (d + o + h === 0)
                switch (w) {
                  case U:
                  case V:
                  case K:
                  case M:
                    Re = '';
                    break;
                  default:
                    if (C !== M) Re = ' ';
                }
              break;
            case re:
              Re = '\\0';
              break;
            case ce:
              Re = '\\f';
              break;
            case se:
              Re = '\\v';
              break;
            case P:
              if (d + h + o === 0 && ge > 0)
                (Oe = 1), (we = 1), (Re = '\f' + Re);
              break;
            case 108:
              if (d + h + o + ke === 0 && z > 0)
                switch (R - z) {
                  case 2:
                    if (w === ne && s.charCodeAt(R - 3) === V) ke = w;
                  case 8:
                    if (m === le) ke = m;
                }
              break;
            case V:
              if (d + h + o === 0) z = R;
              break;
            case U:
              if (h + u + d + o === 0) (we = 1), (Re += '\r');
              break;
            case Y:
            case X:
              if (0 === h) d = d === C ? 0 : 0 === d ? C : d;
              break;
            case G:
              if (d + h + u === 0) o++;
              break;
            case H:
              if (d + h + u === 0) o--;
              break;
            case E:
              if (d + h + o === 0) u--;
              break;
            case D:
              if (d + h + o === 0) {
                if (0 === O)
                  switch (2 * w + 3 * m) {
                    case 533:
                      break;
                    default:
                      (y = 0), (O = 1);
                  }
                u++;
              }
              break;
            case L:
              if (h + u + d + o + z + j === 0) j = 1;
              break;
            case T:
            case Z:
              if (d + o + u > 0) break;
              switch (h) {
                case 0:
                  switch (2 * C + 3 * s.charCodeAt(R + 1)) {
                    case 235:
                      h = Z;
                      break;
                    case 220:
                      (je = R), (h = T);
                  }
                  break;
                case T:
                  if (C === Z && w === T && je + 2 !== R) {
                    if (33 === s.charCodeAt(je + 2))
                      Ve += s.substring(je, R + 1);
                    (Re = ''), (h = 0);
                  }
              }
          }
          if (0 === h) {
            if (ge + d + o + j === 0 && t !== te && C !== W)
              switch (C) {
                case U:
                case ae:
                case _:
                case ee:
                case E:
                case D:
                  if (0 === O) {
                    switch (w) {
                      case K:
                      case M:
                      case I:
                      case J:
                        Re += '\0';
                        break;
                      default:
                        Re = '\0' + Re + (C === U ? '' : '\0');
                    }
                    we = 1;
                  } else
                    switch (C) {
                      case D:
                        if (z + 7 === R && 108 === w) z = 0;
                        O = ++y;
                        break;
                      case E:
                        if (0 == (O = --y)) (we = 1), (Re += '\0');
                    }
                  break;
                case K:
                case M:
                  switch (w) {
                    case re:
                    case B:
                    case q:
                    case W:
                    case U:
                    case ce:
                    case K:
                    case M:
                    case I:
                    case J:
                      break;
                    default:
                      if (0 === O) (we = 1), (Re += '\0');
                  }
              }
            if (((Te += Re), C !== M && C !== K)) $ = C;
          }
      }
      (m = w), (w = C), R++;
    }
    if (((je = Ve.length), me > 0))
      if (0 === je && 0 === Xe.length && (0 === a[0].length) == false)
        if (t !== ie || (1 === a.length && (ge > 0 ? Ee : Ge) === a[0]))
          je = a.join(',').length + 2;
    if (je > 0) {
      if (
        ((f =
          0 === ge && t !== te
            ? (function(e) {
                for (var a, r, s = 0, t = e.length, i = Array(t); s < t; ++s) {
                  for (
                    var f = e[s].split(l),
                      n = '',
                      o = 0,
                      h = 0,
                      u = 0,
                      d = 0,
                      b = f.length;
                    o < b;
                    ++o
                  ) {
                    if (0 === (h = (r = f[o]).length) && b > 1) continue;
                    if (
                      ((u = n.charCodeAt(n.length - 1)),
                      (d = r.charCodeAt(0)),
                      (a = ''),
                      0 !== o)
                    )
                      switch (u) {
                        case T:
                        case ae:
                        case _:
                        case ee:
                        case M:
                        case D:
                          break;
                        default:
                          a = ' ';
                      }
                    switch (d) {
                      case P:
                        r = a + Ee;
                      case ae:
                      case _:
                      case ee:
                      case M:
                      case E:
                      case D:
                        break;
                      case G:
                        r = a + r + Ee;
                        break;
                      case V:
                        switch (2 * r.charCodeAt(1) + 3 * r.charCodeAt(2)) {
                          case 530:
                            if (Ce > 0) {
                              r = a + r.substring(8, h - 1);
                              break;
                            }
                          default:
                            if (o < 1 || f[o - 1].length < 1) r = a + Ee + r;
                        }
                        break;
                      case U:
                        a = '';
                      default:
                        if (h > 1 && r.indexOf(':') > 0)
                          r = a + r.replace(v, '$1' + Ee + '$2');
                        else r = a + r + Ee;
                    }
                    n += r;
                  }
                  i[s] = n.replace(c, '').trim();
                }
                return i;
              })(a)
            : a),
        ye > 0)
      )
        if (
          void 0 !== (n = Pe(Fe, Ve, f, e, pe, be, je, t, i, t)) &&
          0 === (Ve = n).length
        )
          return Ye + Ve + Xe;
      if (((Ve = f.join(',') + '{' + Ve + '}'), Ae * ke != 0)) {
        if (2 === Ae && !Le(Ve, 2)) ke = 0;
        switch (ke) {
          case le:
            Ve = Ve.replace(k, ':' + S + '$1') + Ve;
            break;
          case ne:
            Ve =
              Ve.replace(p, '::' + N + 'input-$1') +
              Ve.replace(p, '::' + S + '$1') +
              Ve.replace(p, ':' + F + 'input-$1') +
              Ve;
        }
        ke = 0;
      }
    }
    return Ye + Ve + Xe;
  }
  function Ie(e, a, r) {
    var c = a.trim().split(o),
      s = c,
      t = c.length,
      i = e.length;
    switch (i) {
      case 0:
      case 1:
        for (var f = 0, n = 0 === i ? '' : e[0] + ' '; f < t; ++f)
          s[f] = Je(n, s[f], r, i).trim();
        break;
      default:
        f = 0;
        var l = 0;
        for (s = []; f < t; ++f)
          for (var h = 0; h < i; ++h)
            s[l++] = Je(e[h] + ' ', c[f], r, i).trim();
    }
    return s;
  }
  function Je(e, a, r, c) {
    var s = a,
      t = s.charCodeAt(0);
    if (t < 33) t = (s = s.trim()).charCodeAt(0);
    switch (t) {
      case P:
        switch (ge + c) {
          case 0:
          case 1:
            if (0 === e.trim().length) break;
          default:
            return s.replace(h, '$1' + e.trim());
        }
        break;
      case V:
        switch (s.charCodeAt(1)) {
          case 103:
            if (Ce > 0 && ge > 0)
              return s.replace(u, '$1').replace(h, '$1' + Ge);
            break;
          default:
            return e.trim() + s.replace(h, '$1' + e.trim());
        }
      default:
        if (r * ge > 0 && s.indexOf('\f') > 0)
          return s.replace(h, (e.charCodeAt(0) === V ? '' : '$1') + e.trim());
    }
    return e + s;
  }
  function Ke(e, a, r, c) {
    var l,
      o = 0,
      h = e + ';',
      u = 2 * a + 3 * r + 4 * c;
    if (944 === u)
      return (function(e) {
        var a = e.length,
          r = e.indexOf(':', 9) + 1,
          c = e.substring(0, r).trim(),
          s = e.substring(r, a - 1).trim();
        switch (e.charCodeAt(9) * Be) {
          case 0:
            break;
          case Q:
            if (110 !== e.charCodeAt(10)) break;
          default:
            for (
              var t = s.split(((s = ''), f)), i = 0, r = 0, a = t.length;
              i < a;
              r = 0, ++i
            ) {
              for (var l = t[i], o = l.split(n); (l = o[r]); ) {
                var h = l.charCodeAt(0);
                if (
                  1 === Be &&
                  ((h > L && h < 90) ||
                    (h > 96 && h < 123) ||
                    h === R ||
                    (h === Q && l.charCodeAt(1) !== Q))
                )
                  switch (isNaN(parseFloat(l)) + (-1 !== l.indexOf('('))) {
                    case 1:
                      switch (l) {
                        case 'infinite':
                        case 'alternate':
                        case 'backwards':
                        case 'running':
                        case 'normal':
                        case 'forwards':
                        case 'both':
                        case 'none':
                        case 'linear':
                        case 'ease':
                        case 'ease-in':
                        case 'ease-out':
                        case 'ease-in-out':
                        case 'paused':
                        case 'reverse':
                        case 'alternate-reverse':
                        case 'inherit':
                        case 'initial':
                        case 'unset':
                        case 'step-start':
                        case 'step-end':
                          break;
                        default:
                          l += De;
                      }
                  }
                o[r++] = l;
              }
              s += (0 === i ? '' : ',') + o.join(' ');
            }
        }
        if (((s = c + s + ';'), 1 === Ae || (2 === Ae && Le(s, 1))))
          return N + s + s;
        return s;
      })(h);
    else if (0 === Ae || (2 === Ae && !Le(h, 1))) return h;
    switch (u) {
      case 1015:
        return 97 === h.charCodeAt(10) ? N + h + h : h;
      case 951:
        return 116 === h.charCodeAt(3) ? N + h + h : h;
      case 963:
        return 110 === h.charCodeAt(5) ? N + h + h : h;
      case 1009:
        if (100 !== h.charCodeAt(4)) break;
      case 969:
      case 942:
        return N + h + h;
      case 978:
        return N + h + S + h + h;
      case 1019:
      case 983:
        return N + h + S + h + F + h + h;
      case 883:
        if (h.charCodeAt(8) === Q) return N + h + h;
        if (h.indexOf('image-set(', 11) > 0)
          return h.replace(z, '$1' + N + '$2') + h;
        return h;
      case 932:
        if (h.charCodeAt(4) === Q)
          switch (h.charCodeAt(5)) {
            case 103:
              return (
                N +
                'box-' +
                h.replace('-grow', '') +
                N +
                h +
                F +
                h.replace('grow', 'positive') +
                h
              );
            case 115:
              return N + h + F + h.replace('shrink', 'negative') + h;
            case 98:
              return N + h + F + h.replace('basis', 'preferred-size') + h;
          }
        return N + h + F + h + h;
      case 964:
        return N + h + F + 'flex-' + h + h;
      case 1023:
        if (99 !== h.charCodeAt(8)) break;
        return (
          (l = h
            .substring(h.indexOf(':', 15))
            .replace('flex-', '')
            .replace('space-between', 'justify')),
          N + 'box-pack' + l + N + h + F + 'flex-pack' + l + h
        );
      case 1005:
        return t.test(h)
          ? h.replace(s, ':' + N) + h.replace(s, ':' + S) + h
          : h;
      case 1e3:
        switch (
          ((o = (l = h.substring(13).trim()).indexOf('-') + 1),
          l.charCodeAt(0) + l.charCodeAt(o))
        ) {
          case 226:
            l = h.replace(m, 'tb');
            break;
          case 232:
            l = h.replace(m, 'tb-rl');
            break;
          case 220:
            l = h.replace(m, 'lr');
            break;
          default:
            return h;
        }
        return N + h + F + l + h;
      case 1017:
        if (-1 === h.indexOf('sticky', 9)) return h;
      case 975:
        switch (
          ((o = (h = e).length - 10),
          (u =
            (l = (33 === h.charCodeAt(o) ? h.substring(0, o) : h)
              .substring(e.indexOf(':', 7) + 1)
              .trim()).charCodeAt(0) +
            (0 | l.charCodeAt(7))))
        ) {
          case 203:
            if (l.charCodeAt(8) < 111) break;
          case 115:
            h = h.replace(l, N + l) + ';' + h;
            break;
          case 207:
          case 102:
            h =
              h.replace(l, N + (u > 102 ? 'inline-' : '') + 'box') +
              ';' +
              h.replace(l, N + l) +
              ';' +
              h.replace(l, F + l + 'box') +
              ';' +
              h;
        }
        return h + ';';
      case 938:
        if (h.charCodeAt(5) === Q)
          switch (h.charCodeAt(6)) {
            case 105:
              return (
                (l = h.replace('-items', '')),
                N + h + N + 'box-' + l + F + 'flex-' + l + h
              );
            case 115:
              return N + h + F + 'flex-item-' + h.replace(y, '') + h;
            default:
              return (
                N +
                h +
                F +
                'flex-line-pack' +
                h.replace('align-content', '').replace(y, '') +
                h
              );
          }
        break;
      case 973:
      case 989:
        if (h.charCodeAt(3) !== Q || 122 === h.charCodeAt(4)) break;
      case 931:
      case 953:
        if (true === j.test(e))
          if (115 === (l = e.substring(e.indexOf(':') + 1)).charCodeAt(0))
            return Ke(e.replace('stretch', 'fill-available'), a, r, c).replace(
              ':fill-available',
              ':stretch'
            );
          else
            return (
              h.replace(l, N + l) + h.replace(l, S + l.replace('fill-', '')) + h
            );
        break;
      case 962:
        if (
          ((h = N + h + (102 === h.charCodeAt(5) ? F + h : '') + h),
          r + c === 211 &&
            105 === h.charCodeAt(13) &&
            h.indexOf('transform', 10) > 0)
        )
          return (
            h.substring(0, h.indexOf(';', 27) + 1).replace(i, '$1' + N + '$2') +
            h
          );
    }
    return h;
  }
  function Le(e, a) {
    var r = e.indexOf(1 === a ? ':' : '{'),
      c = e.substring(0, 3 !== a ? r : 10),
      s = e.substring(r + 1, e.length - 1);
    return Oe(2 !== a ? c : c.replace(O, '$1'), s, a);
  }
  function Me(e, a) {
    var r = Ke(a, a.charCodeAt(0), a.charCodeAt(1), a.charCodeAt(2));
    return r !== a + ';'
      ? r.replace($, ' or ($1)').substring(4)
      : '(' + a + ')';
  }
  function Pe(e, a, r, c, s, t, i, f, n, l) {
    for (var o, h = 0, u = a; h < ye; ++h)
      switch ((o = $e[h].call(Te, e, u, r, c, s, t, i, f, n, l))) {
        case void 0:
        case false:
        case true:
        case null:
          break;
        default:
          u = o;
      }
    if (u !== a) return u;
  }
  function Qe(e, a, r, c) {
    for (var s = a + 1; s < r; ++s)
      switch (c.charCodeAt(s)) {
        case Z:
          if (e === T)
            if (c.charCodeAt(s - 1) === T && a + 2 !== s) return s + 1;
          break;
        case I:
          if (e === Z) return s + 1;
      }
    return s;
  }
  function Re(e) {
    for (var a in e) {
      var r = e[a];
      switch (a) {
        case 'keyframe':
          Be = 0 | r;
          break;
        case 'global':
          Ce = 0 | r;
          break;
        case 'cascade':
          ge = 0 | r;
          break;
        case 'compress':
          we = 0 | r;
          break;
        case 'semicolon':
          ve = 0 | r;
          break;
        case 'preserve':
          me = 0 | r;
          break;
        case 'prefix':
          if (((Oe = null), !r)) Ae = 0;
          else if ('function' != typeof r) Ae = 1;
          else (Ae = 2), (Oe = r);
      }
    }
    return Re;
  }
  function Te(a, r) {
    if (void 0 !== this && this.constructor === Te) return e(a);
    var s = a,
      t = s.charCodeAt(0);
    if (t < 33) t = (s = s.trim()).charCodeAt(0);
    if (Be > 0) De = s.replace(d, t === G ? '' : '-');
    if (((t = 1), 1 === ge)) Ge = s;
    else Ee = s;
    var i,
      f = [Ge];
    if (ye > 0)
      if (
        void 0 !== (i = Pe(ze, r, f, f, pe, be, 0, 0, 0, 0)) &&
        'string' == typeof i
      )
        r = i;
    var n = He(xe, f, r, 0, 0);
    if (ye > 0)
      if (
        void 0 !== (i = Pe(je, n, f, f, pe, be, n.length, 0, 0, 0)) &&
        'string' != typeof (n = i)
      )
        t = 0;
    return (
      (De = ''),
      (Ge = ''),
      (Ee = ''),
      (ke = 0),
      (pe = 1),
      (be = 1),
      we * t == 0
        ? n
        : n
            .replace(c, '')
            .replace(g, '')
            .replace(A, '$1')
            .replace(C, '$1')
            .replace(w, ' ')
    );
  }
  if (
    ((Te.use = function e(a) {
      switch (a) {
        case void 0:
        case null:
          ye = $e.length = 0;
          break;
        default:
          if ('function' == typeof a) $e[ye++] = a;
          else if ('object' == typeof a)
            for (var r = 0, c = a.length; r < c; ++r) e(a[r]);
          else qe = 0 | !!a;
      }
      return e;
    }),
    (Te.set = Re),
    void 0 !== a)
  )
    Re(a);
  return Te;
};

const cache = {};
const hash = () =>
  Math.random()
    .toString(36)
    .replace('0.', '');

const sheet = document.createElement('style');
document.head.appendChild(sheet);

const none = hash => `.${hash}{display:none}`;
const hide = hash => (sheet.innerHTML = none(hash) + sheet.innerHTML);
const show = hash =>
  (sheet.innerHTML = sheet.innerHTML.replace(none(hash), ''));

const process = key => hash => rules => {
  sheet.innerHTML += (cache[key] = {
    hash,
    rules: stylis()(`.${hash}`, rules)
  }).rules;
  if (key.startsWith('/')) show(hash);
};

var index = (strings, ...values) => {
  const key = strings[0].startsWith('/')
    ? strings[0]
    : strings.reduce(
        (acc, string, i) =>
          (acc += string + (values[i] == null ? '' : values[i])),
        ''
      );

  if (cache[key]) return cache[key].hash;

  const className = 'csz-' + hash();
  const append = process(key)(className);

  if (key.startsWith('/')) {
    hide(className);
    fetch(key)
      .then(res => res.text())
      .then(append);
  } else append(key);

  return className;
};

export default index;
