#### 1. How do you optimize your react application ?

- **Code Splitting**: Break down large bundles into smaller chunks to reduce initial load times
- **Lazy Loading**: Load non-essential components\asynchronously to prioritize critical content.
- **Caching and Memoization**: Cache data locally or use memoization libraries to avoid redundant API calls and computations.- Memoization: Memoize expensive computations and avoid unnecessary re-renders using tools like React.memo and useMemo.
- **Optimized Rendering**: Use shouldComponentUpdate, PureComponent, or React.memo to prevent unnecessary re-renders of components.
- **Virtualization**: Implement virtual lists and grids to render only the visible elements, improving rendering performance for large datasets.
- **Server-Side Rendering (SSR)**: Pre-render content on the server to improve initial page load times and enhance SEO.
- **Bundle Analysis**: Identify and remove unused dependencies, optimize images, and minify code to reduce bundle size.
- **Performance Monitoring**: Continuously monitor app performance using tools like Lighthouse, Web Vitals, and browser DevTools.
- **Optimize rendering with keys**: - Ensure each list item in a mapped array has a unique and stable key prop to optimize rendering performance. Keys help React identify which items have changed, been added, or removed, minimizing unnecessary DOM updates.
- **CDN Integration**: Serve static assets and resources from Content Delivery Networks (CDNs) to reduce latency and improve reliability.
