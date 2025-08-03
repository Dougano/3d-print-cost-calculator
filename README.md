# 3D Print Cost Calculator 🇿🇦

A comprehensive Progressive Web App (PWA) for calculating 3D printing costs in South Africa. Built specifically for the South African market with Rand (ZAR) currency and local electricity rates.

## 🚀 Live Demo

**[https://dougano.github.io/3d-print-cost-calulator](https://dougano.github.io/3d-print-cost-calulator)**

## 📱 Features

### 💰 Cost Calculation
- **Material Costs** - Calculate filament usage and costs based on density
- **Labour Costs** - Hourly rate calculations
- **Operational Costs** - Power consumption and maintenance
- **Profit Margins** - Configurable markup percentages
- **Final Pricing** - Complete selling price breakdown

### 🔍 Advanced Search & Filtering
- **Real-time Search** - Search products by name as you type
- **Material Filtering** - Filter by filament type (PLA, ABS, PETG, etc.)
- **Smart Sorting** - Sort by date, price (high-low, low-high)
- **Visual Indicators** - Shows filtered vs total product counts
- **Quick Clear** - One-click filter reset

### 🗄️ Enterprise-Grade Data Management
- **PouchDB Integration** - Powerful NoSQL database with indexing
- **Advanced Querying** - Fast searches across large product collections
- **Data Migration** - Seamless upgrade from localStorage/IndexedDB
- **Multiple Backups** - localStorage + sessionStorage fallbacks
- **Import/Export** - JSON file-based data exchange
- **Sample Data** - Pre-loaded examples to get started quickly

### 📁 File-Based Database System
- **products.json Database** - Central product database file in repository
- **Auto-Merge** - Automatically loads database products on first visit
- **User Data Priority** - Local changes take precedence over database
- **Database Export** - Export current products as new database format
- **Auto-Export** - Automatic file downloads after every 5 changes
- **Manual Export** - On-demand timestamped backups
- **Import Products** - Load data from JSON files with validation
- **Cross-Device Sharing** - Email or cloud-share product collections

### 🔄 Optional Cloud Sync
- **CouchDB Support** - Real-time sync across devices
- **Live Replication** - Automatic bidirectional sync
- **Conflict Resolution** - Built-in conflict handling
- **Offline-First** - Works with or without internet

### 🖥️ Desktop & Mobile Views
- **Responsive Design** - Optimized layouts for all screen sizes
- **Desktop View** - Side-by-side calculator and results panels
- **Mobile View** - Tabbed interface for calculator and products
- **Touch Friendly** - Large buttons and input fields on mobile
- **Focus Management** - Smooth typing without input interruption

### 🇿🇦 South African Optimized
- **Currency**: South African Rand (ZAR)
- **Electricity Rate**: R3.50/kWh (average Eskom rate)
- **Default Pricing**: Realistic SA market rates
- **Filament Prices**: R450 for 1kg spool (typical SA pricing)
- **Labour Rate**: R0/hour default (customizable)

### 📱 Progressive Web App (PWA)
- **Install on Mobile** - Add to home screen like a native app
- **Offline Functionality** - Works without internet connection
- **Mobile Optimized** - Touch-friendly interface
- **Service Worker** - Enhanced caching and performance

### 🔧 Material Support
- **PLA** (Polylactic Acid) - 1.27 g/cm³
- **ABS** (Acrylonitrile Butadiene Styrene) - 1.05 g/cm³
- **PETG** (Polyethylene Terephthalate) - 1.25 g/cm³
- **PETT** (T-Glase filament) - 1.45 g/cm³
- **HIPS** (High Impact Polystyrene) - 1.04 g/cm³
- **TPU** (Thermoplastic Polyurethane) - 1.30 g/cm³
- **Custom Materials** - Define your own density

### 📊 Product Management
- **Save Products** - Store calculations for future reference
- **Edit Products** - Modify existing product calculations
- **Duplicate Products** - Copy existing products as templates
- **Auto-Export** - Automatic file downloads on product changes
- **Bulk Operations** - Import/export entire product collections
- **Search & Filter** - Find products quickly in large databases
- **Smart Storage** - Multi-layer persistence with automatic fallbacks
- **Product Statistics** - Track totals, averages, and material breakdowns
- **Notifications** - Visual feedback for auto-exports and operations

## 🛠️ Usage

### Basic Calculation
1. Enter your **product name**
2. Select **filament type** (PLA, ABS, PETG, etc.)
3. Input **filament length used** (in meters)
4. Set **print time** (in hours)
5. Configure **pricing parameters**:
   - Filament price (R)
   - Hourly labour rate (R)
   - Markup percentage (%)
6. Review **cost breakdown**
7. **Save product** for future reference

### Advanced Settings
- **Printer Power**: Wattage consumption (default: 1W)
- **Electricity Rate**: Cost per kWh (default: R3.50)
- **Maintenance Cost**: Hourly wear-and-tear (default: R8.50/hour)
- **Custom Density**: For specialty filaments
- **Filament Diameter**: Configurable diameter (default: 1.75mm)

### Mobile Installation
1. Open the app in your mobile browser
2. Look for **"Install App"** banner
3. Tap **"Install"** or use browser menu **"Add to Home Screen"**
4. Launch from home screen like any app

## 💻 Technical Details

### Built With
- **Vanilla JavaScript** - No framework dependencies
- **Single HTML File** - Entire app in one file
- **PouchDB** - Client-side NoSQL database with sync capabilities
- **Tailwind CSS** - Styling and responsive design
- **Service Worker** - Offline functionality and caching
- **Web App Manifest** - PWA installation support
- **Multi-layer Storage** - PouchDB → localStorage → sessionStorage fallbacks

### Database Features
- **IndexedDB Backend** - Persistent, structured storage
- **Automatic Indexing** - Optimized queries on name, date, material, price
- **Bulk Operations** - Efficient batch saving and loading
- **Data Migration** - Seamless upgrades from older storage methods
- **Conflict-free Sync** - CouchDB-compatible replication protocol

### Browser Support
- ✅ Chrome (Android/Desktop) - Full PouchDB support
- ✅ Safari (iOS/macOS) - IndexedDB + localStorage fallback
- ✅ Firefox (Android/Desktop) - Full PouchDB support
- ✅ Edge (Desktop/Mobile) - Full PouchDB support

### File Structure
```
3d-print-cost-calulator/
├── index.html              # Main application (includes PouchDB integration)
├── manifest.json           # PWA manifest
├── products.json           # Main product database (12 products)
├── sample-products.json    # Sample data for new users
└── README.md               # This documentation
```

## 🚀 Deployment

This app is deployed using GitHub Pages and automatically updates when changes are pushed to the main branch.

### Local Development
1. Clone the repository
2. Open `index.html` in a web browser
3. For HTTPS (required for PWA features), use a local server:
   ```bash
   python -m http.server 8000
   # or
   npx serve .
   ```

### Data Management
- **Auto-Export** - Automatic file downloads after every 5 product changes
- **Manual Export** - On-demand JSON backups with timestamps
- **Import/Export** - JSON file format for data portability
- **Cloud Sync Setup** - Optional CouchDB configuration
- **Sample Data** - Load pre-configured products for testing
- **Notifications** - Visual feedback for all export operations

## 📊 Default Values (South African Market)

| Setting | Default Value | Notes |
|---------|---------------|-------|
| Filament Price | R450 | 1kg PLA spool |
| Filament Length | 1m | Starting value |
| Labour Rate | R0/hour | Customizable based on needs |
| Electricity | R3.50/kWh | Average Eskom rate |
| Maintenance | R8.50/hour | Printer wear-and-tear |
| Printer Power | 1W | Low power consumption |
| Markup | 15% | Conservative profit margin |
| Print Time | 2 hours | Default print duration |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For issues, questions, or feature requests:
1. Check existing [Issues](https://github.com/Dougano/3d-print-cost-calulator/issues)
2. Create a new issue if needed
3. Provide details about your browser/device

## 🔄 Version History

### v2.2.1 (Current) - Bug Fix Edition
- 🐛 **Fixed Material Cost Calculation** - Corrected volume calculation units mismatch
- 🐛 **Fixed Decimal Input Issues** - Preserved partial decimal values during typing
- ✅ **Improved Input Handling** - Better focus restoration and cursor positioning

### v2.2.0 - Database Edition
- ✅ **JSON Database File** - Central products.json database with 12 sample products
- ✅ **Auto-Merge System** - Automatically loads database products on startup
- ✅ **Database Export** - Export current collection as products.json format
- ✅ **Smart Data Management** - User data priority with database supplementation
- ✅ **Copy-Paste Friendly Inputs** - Flexible number parsing for better UX

### v2.1.0 - Auto-Export Edition
- ✅ **Auto-Export System** - Automatic file downloads after every 5 changes
- ✅ **Smart Notifications** - Visual feedback for auto-exports and operations
- ✅ **Enhanced Export Format** - JSON files with metadata and versioning
- ✅ **Toggle Controls** - Easy enable/disable auto-export functionality
- ✅ **Persistent Preferences** - Auto-export settings saved across sessions

### v2.0.0 - Enterprise Edition
- ✅ **PouchDB Integration** - Advanced NoSQL database with indexing
- ✅ **Search & Filtering** - Real-time search, material filters, smart sorting
- ✅ **Import/Export** - JSON file-based data exchange
- ✅ **Sample Data** - Pre-loaded product examples
- ✅ **Data Migration** - Automatic upgrade from localStorage/IndexedDB
- ✅ **Focus Management** - Smooth typing without input interruption
- ✅ **Multi-layer Storage** - PouchDB + localStorage + sessionStorage fallbacks
- ✅ **Cloud Sync Ready** - Optional CouchDB integration
- ✅ **Bulk Operations** - Efficient batch data handling
- ✅ **Product Statistics** - Advanced analytics and reporting

### v1.1.0
- ✅ Desktop view implementation
- ✅ Responsive grid layouts
- ✅ Product duplication feature
- ✅ Improved input handling with debouncing
- ✅ Removed editable cost overrides for simplicity
- ✅ Updated default values for better UX

### v1.0.0
- ✅ Initial release
- ✅ PWA functionality
- ✅ South African localization
- ✅ Mobile-first design
- ✅ Product management
- ✅ Cost calculations
- ✅ Offline support

## 🎯 Future Features

- [ ] **Enhanced Analytics** - Profit margin analysis, material usage trends
- [ ] **Multi-Currency Support** - USD, EUR, GBP conversion rates
- [ ] **Print Quality Impact** - Layer height and infill cost calculations
- [ ] **Waste Factor** - Account for failed prints and material waste
- [ ] **Print Time Estimation** - AI-powered time predictions
- [ ] **Material Database** - Expanded filament types and suppliers
- [ ] **Business Dashboard** - Revenue tracking and customer management
- [ ] **Team Collaboration** - Multi-user workspaces with shared databases

## 📱 Screenshots

### Mobile Interface
- Calculator view with cost breakdown
- Product management interface
- PWA installation prompt

### Desktop Interface
- Side-by-side calculator and results
- Product table with full details
- Export functionality

---

**Made for the South African 3D printing community** 🇿🇦

*Calculate costs accurately, price competitively, and grow your 3D printing business.*
