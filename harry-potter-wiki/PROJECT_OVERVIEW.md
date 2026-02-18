# Harry Potter Wiki - Interactive React Application

This is a comprehensive Harry Potter wiki application built with React that demonstrates advanced data fetching, caching, and state management techniques using both Redux Toolkit with thunk middleware and React Query. The application integrates with the latest **PotterAPI** (https://potterapi-fedeperin.vercel.app) with full language support and enhanced features.

## 📋 Assignment Requirements Fulfilled

### ✅ Four Separate Pages with Distinct API Interactions

1. **Books Page** (Redux + Thunk)
   - Fetches data using Redux Toolkit and createAsyncThunk
   - Implements intelligent caching with timestamp-based cache validation
   - Shows loading states and error handling
   - Displays book information with proper styling

2. **Spells Page** (Redux + Thunk + Pagination)
   - Uses Redux for state management with pagination support
   - Implements comprehensive pagination with page navigation
   - Shows current page status and total items
   - Handles loading and error states effectively

3. **Characters Page** (React Query + Search)
   - Utilizes React Query for data fetching and caching
   - **NEW**: Real-time search functionality with debounced input
   - **NEW**: Random Character feature using API's `/random` endpoint
   - Implements automatic background refetching
   - Shows cache status and last updated time
   - Responsive grid layout for character cards

4. **Houses Page** (React Query + Query Invalidation)
   - Uses React Query with advanced cache management
   - Features a dedicated \"Invalidate Query\" button to demonstrate cache invalidation
   - Color-coded house themes (Gryffindor red, Slytherin green, etc.)
   - Displays comprehensive house information

## 🏗️ Project Architecture

### Redux Implementation
- **Store Configuration**: Centralized store with books and spells reducers
- **Async Thunks**: Used for API calls with proper loading and error states
- **Caching Strategy**: Time-based cache validation to prevent unnecessary API calls
- **Pagination State**: Complete pagination state management for spells

### React Query Implementation
- **Query Client**: Configured with optimized default settings
- **Stale Time**: 5-minute stale time for efficient caching
- **Cache Time**: 10-minute cache time for data persistence
- **Query Invalidation**: Manual cache invalidation demonstration
- **Background Refetching**: Automatic data freshening

### Styling & UI
- **Tailwind CSS**: Modern, responsive design system
- **Theme Integration**: Harry Potter-inspired color schemes
- **Loading States**: Proper loading indicators and animations
- **Error Handling**: User-friendly error messages and retry buttons
- **Mobile Responsive**: Fully responsive design for all screen sizes

## 🚀 Features

### Data Management
- ✅ Redux Toolkit with createAsyncThunk for async operations
- ✅ React Query for server state management
- ✅ Intelligent caching mechanisms
- ✅ Optimistic updates and background synchronization
- ✅ Comprehensive error boundaries and states

### User Interface
- ✅ Modern, responsive design
- ✅ Interactive navigation with active states
- ✅ Dynamic loading indicators
- ✅ House-themed color coding
- ✅ Mobile-first approach

### Performance Optimizations
- ✅ Proper data caching strategies
- ✅ Minimal re-renders through memoization
- ✅ Lazy loading considerations
- ✅ Efficient state updates

## 📱 Navigation

The application includes a responsive navigation bar with:
- **Home (Books)**: Redux-powered book catalog
- **Spells**: Paginated spells with Redux state management
- **Characters**: React Query-powered character explorer
- **Houses**: House information with query invalidation demo

## 🔧 Technical Implementation

### API Integration
- **Updated Base URL**: https://potterapi-fedeperin.vercel.app (latest version)
- **Language Support**: Uses English endpoints (`/en/books`, `/en/characters`, etc.)
- **Advanced Features**: Search functionality, random endpoints
- **Efficient Pagination**: Local pagination for spells to minimize API calls
- **Error Handling**: Comprehensive error states and retry mechanisms
- **Loading States**: Proper loading indicators across all pages
- **Data Transformation**: Clean data presentation with fallbacks

### State Management Patterns
1. **Redux Pattern**: Actions → Reducers → Store → Components
2. **React Query Pattern**: Queries → Cache → Components
3. **Cache Invalidation**: Manual and automatic cache management
4. **Optimistic Updates**: Immediate UI feedback

### Code Organization
```
src/
├── app/
│   └── store.js              # Redux store configuration
├── features/
│   ├── booksSlice.js         # Books Redux slice with thunk
│   └── spellsSlice.js        # Spells Redux slice with pagination
├── pages/
│   ├── Books.jsx             # Redux-powered books page
│   ├── Spells.jsx            # Redux-powered spells with pagination
│   ├── Characters.jsx        # React Query characters page
│   └── Houses.jsx            # React Query houses with invalidation
├── components/
│   └── Navbar.jsx            # Navigation component
└── styles/
    ├── index.css             # Tailwind setup and global styles
    └── App.css               # Custom component styles
```

## 🎯 Key Learning Demonstrations

1. **Redux vs React Query**: Clear comparison of both approaches
2. **Caching Strategies**: Different caching mechanisms and their use cases
3. **Error Handling**: Comprehensive error boundaries and user feedback
4. **Performance**: Optimized rendering and data fetching patterns
5. **User Experience**: Loading states, error recovery, and intuitive navigation

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 📊 Performance Metrics

- **Bundle Size**: Optimized with code splitting
- **Cache Hit Rate**: High cache efficiency with React Query
- **Loading Times**: Fast initial loads with proper caching
- **User Experience**: Smooth navigation and interactions

This project demonstrates a complete understanding of modern React ecosystem tools and best practices for building scalable, maintainable applications with excellent user experience.