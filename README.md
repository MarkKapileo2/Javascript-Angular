# Interactive World Map Application

An interactive web application built with Angular that displays country information using an SVG-based world map and a public API. Users can hover over or select countries to dynamically view relevant data.

## Features

- Interactive SVG world map
- Hover and click support for country selection
- Real-time country data fetched from an external API
- Dynamic UI updates based on user interaction
- Responsive and modern Angular architecture

## Technologies Used

- **Angular**
- **TypeScript**
- **HTML5 / CSS3**
- **SVG Graphics**
- **REST API Integration**

## How It Works

- The world map is rendered using an SVG file embedded into the Angular application
- Each country is mapped to SVG paths with event bindings
- When a user hovers over or selects a country, an API request is triggered
- Country data is retrieved and displayed dynamically in the UI

## API Usage

The application uses WORLDAPI to retrieve information such as:
- Country name
- Region
- Population
- Additional metadata depending on availability
