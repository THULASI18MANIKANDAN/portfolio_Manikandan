export const getImageUrl = (path) => {
    return new URL(path, import.meta.url).href;
};

export const resolvePath = (path) => {
    // If the path is a full URL, return it as is
    if (path.startsWith('http')) return path;

    // Remove leading slash if present to avoid double slashes when combining
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // In production (GitHub Pages), we need to prepend the base URL
    // import.meta.env.BASE_URL will be '/portfolio_Manikandan/' in production
    // and '/' in development
    return `${import.meta.env.BASE_URL}${cleanPath}`;
};
