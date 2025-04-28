# SparkyBen Electrical - Favicon Guide

This guide explains how to prepare and upload favicon files for the SparkyBen Electrical website.

## What are Favicons?

Favicons are small icons that appear in browser tabs, bookmarks, and other places to represent your website. A complete favicon set includes multiple sizes and formats to ensure compatibility across different devices and browsers.

## Required Favicon Files

The following favicon files should be uploaded to the `/public/favicons/` directory:

1. `favicon.ico` - 16x16, 32x32, and 48x48 (multi-size ICO file)
2. `favicon-16x16.png` - 16x16 PNG file
3. `favicon-32x32.png` - 32x32 PNG file
4. `apple-touch-icon.png` - 180x180 PNG file for Apple devices
5. `android-chrome-192x192.png` - 192x192 PNG file for Android devices
6. `android-chrome-512x512.png` - 512x512 PNG file for Android devices
7. `favicon.svg` - SVG version of the favicon (if available)

## How to Create Favicon Files

### Option 1: Use an Online Favicon Generator (Recommended)

1. Visit [RealFaviconGenerator](https://realfavicongenerator.net/)
2. Upload a high-resolution image of the SparkyBen logo (preferably at least 512x512 pixels)
3. Customize the settings:
   - For the favicon design, use the brand color (#70BBC5) as the background
   - For iOS devices, ensure the background color is set to #70BBC5
   - For Android devices, use the "Add a background color" option with #70BBC5
4. Generate the favicon package
5. Download the package and extract the files
6. Upload the extracted files to the `/public/favicons/` directory

### Option 2: Create Manually

If you prefer to create the favicon files manually:

1. Start with a high-resolution version of the SparkyBen logo
2. Use an image editor like Photoshop, GIMP, or Figma to create the different sizes
3. Ensure the background color is #70BBC5
4. Save in the appropriate formats (PNG, ICO, SVG)
5. Upload the files to the `/public/favicons/` directory

## Uploading the Files

1. Navigate to the `/public/favicons/` directory in the project
2. Replace the placeholder files with your actual favicon files
3. Ensure all the required files are present
4. Commit and push the changes to the repository

## Verifying the Favicons

After uploading the favicon files:

1. Run the development server (`npm run dev`)
2. Open the website in different browsers
3. Check that the favicon appears correctly in the browser tab
4. Test on mobile devices to ensure the app icons appear correctly

## Troubleshooting

If the favicons don't appear correctly:

1. Check that all files are in the correct location (`/public/favicons/`)
2. Verify that the file names match exactly what's referenced in `index.html`
3. Clear your browser cache and reload the page
4. Check the browser console for any 404 errors related to favicon files

## Need Help?

If you need assistance with creating or implementing the favicons, please contact the development team.
