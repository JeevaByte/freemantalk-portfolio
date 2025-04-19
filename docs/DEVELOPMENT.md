# Development Guide

## Project Structure

```
src/
├── components/         # Reusable UI components
├── hooks/             # Custom React hooks
├── pages/            # Page components
├── services/         # API and service integrations
├── types/            # TypeScript type definitions
├── utils/            # Utility functions
└── __tests__/        # Test files
```

## Performance Optimizations

### Code Splitting
- Components are lazy-loaded using `React.lazy()`
- Routes are code-split for faster initial load
- Images are lazy-loaded with fallbacks

### Image Optimization
- Use the `useImagePreload` hook for image loading
- Implement proper image sizing and formats
- Use WebP format with fallbacks

### State Management
- React Query for server state
- Proper memoization with `useMemo` and `useCallback`
- Efficient re-rendering with `React.memo`

## Testing

### Setup
- Jest for test running
- React Testing Library for component testing
- Mock utilities for API calls
- Custom test utilities in `__tests__/utils.tsx`

### Running Tests
```bash
npm test          # Run all tests
npm run test:watch  # Run tests in watch mode
npm run test:coverage  # Generate test coverage report
```

## Accessibility

### Features
- ARIA labels and roles
- Keyboard navigation
- Screen reader support
- Focus management
- Color contrast compliance

### Utilities
- `trapFocus` for modal dialogs
- `announceToScreenReader` for dynamic content
- `getAriaLabel` for consistent labeling
- `isFocusable` for keyboard navigation

## Error Handling

### Error Types
- `AppError` for application errors
- API error handling
- Network error detection
- Authentication error handling

### Error Logging
- Console logging in development
- Error boundary for React components
- API error handling with Axios
- Sentry integration (optional)

## Best Practices

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Husky for pre-commit hooks

### Performance
- Code splitting
- Lazy loading
- Image optimization
- Memoization
- Proper state management

### Accessibility
- Semantic HTML
- ARIA attributes
- Keyboard navigation
- Screen reader support
- Color contrast

### Testing
- Unit tests
- Integration tests
- E2E tests (optional)
- Test coverage reporting

## Development Workflow

1. Create a feature branch
2. Write tests
3. Implement feature
4. Run tests and linting
5. Create pull request
6. Code review
7. Merge to main

## Deployment

### Production Build
```bash
npm run build
```

### Development Build
```bash
npm run build:dev
```

### Preview
```bash
npm run preview
``` 