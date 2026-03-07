console.log('--- DEBUG PATHS ---');
console.log('window.location.pathname:', window.location.pathname);
const pathParts = window.location.pathname.split('/').filter(p => p && p !== 'index.html');
console.log('pathParts:', pathParts);
const isSubPage = pathParts.length > 1 || (pathParts.length === 1 && window.location.pathname.endsWith('/'));
console.log('isSubPage (logic):', isSubPage);
console.log('-------------------');
