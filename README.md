# 3D Print Cost Calculator 🇿🇦

A comprehensive Progressive Web App (PWA) for calculating 3D printing costs in South Africa. Built specifically for the South African market with Rand (ZAR) currency and local electricity rates.

## 🚀 Live Demo

**[https://dougano.github.io/3d-print-cost-calulator](https://dougano.github.io/3d-print-cost-calulator)**

## 📱 Features

### 💰 Cost Calculation
- **Material Costs** - Calculate filament usage and costs
- **Labour Costs** - Hourly rate calculations
- **Operational Costs** - Power consumption and maintenance
- **Profit Margins** - Configurable markup percentages
- **Final Pricing** - Complete selling price breakdown

### 🇿🇦 South African Optimized
- **Currency**: South African Rand (ZAR)
- **Electricity Rate**: R3.50/kWh (average Eskom rate)
- **Default Pricing**: Realistic SA market rates
- **Filament Prices**: R450 for 1kg spool (typical SA pricing)
- **Labour Rate**: R250/hour default

### 📱 Progressive Web App (PWA)
- **Install on Mobile** - Add to home screen like a native app
- **Offline Functionality** - Works without internet connection
- **Mobile Optimized** - Touch-friendly interface
- **Responsive Design** - Works on all screen sizes

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
- **Export Data** - Download product database as JSON
- **Local Storage** - All data saved on your device

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
- **Printer Power**: Wattage consumption (default: 250W)
- **Electricity Rate**: Cost per kWh (default: R3.50)
- **Maintenance Cost**: Hourly wear-and-tear (default: R8.50/hour)
- **Custom Density**: For specialty filaments

### Mobile Installation
1. Open the app in your mobile browser
2. Look for **"Install App"** banner
3. Tap **"Install"** or use browser menu **"Add to Home Screen"**
4. Launch from home screen like any app

## 💻 Technical Details

### Built With
- **React 18** - User interface
- **Tailwind CSS** - Styling and responsive design
- **Service Worker** - Offline functionality
- **Web App Manifest** - PWA installation
- **Local Storage** - Data persistence

### Browser Support
- ✅ Chrome (Android/Desktop)
- ✅ Safari (iOS/macOS)
- ✅ Firefox (Android/Desktop)
- ✅ Edge (Desktop/Mobile)

### File Structure
```
3d-print-cost-calulator/
├── index.html          # Main application file
├── manifest.json       # PWA manifest
└── README.md           # This file
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

## 📊 Default Values (South African Market)

| Setting | Default Value | Notes |
|---------|---------------|-------|
| Filament Price | R450 | 1kg PLA spool |
| Labour Rate | R250/hour | Reasonable SA rate |
| Electricity | R3.50/kWh | Average Eskom rate |
| Maintenance | R8.50/hour | Printer wear-and-tear |
| Printer Power | 250W | Typical 3D printer consumption |
| Markup | 50% | Starting profit margin |

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

### v1.0.0 (Current)
- ✅ Initial release
- ✅ PWA functionality
- ✅ South African localization
- ✅ Mobile-first design
- ✅ Product management
- ✅ Cost calculations
- ✅ Offline support

## 🎯 Future Features

- [ ] Material database expansion
- [ ] Print quality settings impact
- [ ] Multiple currency support
- [ ] Business analytics dashboard
- [ ] Cloud sync (optional)
- [ ] Print time estimation
- [ ] Waste factor calculations

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
