# Sales Dashboard (Next.js)

## Project Overview

This is a basic sales dashboard built using Next.js 15, TypeScript, TailwindCSS, and Recharts.
The dashboard visualizes yearly sales data for 2022, 2023, and 2024.

## Features

* Bar Chart, Line Chart, and Pie Chart using Recharts
* Chart switching buttons
* Sales threshold filter input
* Reset button
* Atomic component structure (atoms, molecules, organisms)

## Data Source

Sales data is derived from the Kaggle Superstore Dataset:
https://www.kaggle.com/datasets/vivek468/superstore-dataset-final

## Project Structure

components/

* atoms
* molecules
* organisms

data/

* salesData.ts

app/

* dashboard/page.tsx

## How to Run the Project

Install dependencies:
npm install

Run development server:
npm run dev

Open in browser:
http://localhost:3000/dashboard

## Technologies Used

* Next.js 15
* TypeScript
* TailwindCSS
* Recharts
* Kaggle dataset
