// From stackoverflow.com:
// https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
function blend(r,n,t){return r.length>7?blendRGBColors(r,n,t):blendColors(r,n,t)}function shadeColor2(r,n){var t=parseInt(r.slice(1),16),e=n<0?0:255,s=n<0?-1*n:n,a=t>>16,o=t>>8&255,l=255&t;return"#"+(16777216+65536*(Math.round((e-a)*s)+a)+256*(Math.round((e-o)*s)+o)+(Math.round((e-l)*s)+l)).toString(16).slice(1)}function blendColors(r,n,t){var e=parseInt(r.slice(1),16),s=parseInt(n.slice(1),16),a=e>>16,o=e>>8&255,l=255&e,i=s>>16,u=s>>8&255,d=255&s;return"#"+(16777216+65536*(Math.round((i-a)*t)+a)+256*(Math.round((u-o)*t)+o)+(Math.round((d-l)*t)+l)).toString(16).slice(1)}function shadeRGBColor(r,n){var t=r.split(","),e=n<0?0:255,s=n<0?-1*n:n,a=parseInt(t[0].slice(4)),o=parseInt(t[1]),l=parseInt(t[2]);return"rgb("+(Math.round((e-a)*s)+a)+","+(Math.round((e-o)*s)+o)+","+(Math.round((e-l)*s)+l)+")"}function blendRGBColors(r,n,t){var e=r.split(","),s=n.split(","),a=parseInt(e[0].slice(4)),o=parseInt(e[1]),l=parseInt(e[2]);return"rgb("+(Math.round((parseInt(s[0].slice(4))-a)*t)+a)+","+(Math.round((parseInt(s[1])-o)*t)+o)+","+(Math.round((parseInt(s[2])-l)*t)+l)+")"}function shadeBlend(r,n,t){var e=r<0?-1*r:r,s=Math.round,a=parseInt;if(n.length>7){var o=n.split(","),l=(t||(r<0?"rgb(0,0,0)":"rgb(255,255,255)")).split(","),i=a(o[0].slice(4)),u=a(o[1]),d=a(o[2]);return"rgb("+(s((a(l[0].slice(4))-i)*e)+i)+","+(s((a(l[1])-u)*e)+u)+","+(s((a(l[2])-d)*e)+d)+")"}var c=(o=a(n.slice(1),16))>>16,h=o>>8&255,p=255&o;return"#"+(16777216+65536*(s((((l=a((t||(r<0?"#000000":"#FFFFFF")).slice(1),16))>>16)-c)*e)+c)+256*(s(((l>>8&255)-h)*e)+h)+(s(((255&l)-p)*e)+p)).toString(16).slice(1)}

export default (color, percent) =>
  color.length > 7
    ? shadeRGBColor(color, percent)
    : shadeColor2(color,percent)
