# mfePoc

## Overview

`mfePoc` is a proof-of-concept project that explores Micro Frontends (MFE) architecture. It demonstrates how to integrate multiple frontend applications into a single cohesive user interface using Module Federation. This project includes examples of both React and Angular applications to showcase interoperability between different frontend frameworks.

## Features

- **Micro Frontend Architecture**: Implements Module Federation to dynamically load and integrate micro frontend modules.
- **Multi-Framework Integration**: Includes both React and Angular applications to highlight cross-framework capabilities.
- **Dynamic Module Loading**: Efficiently manages and loads micro frontend modules on-demand.
- **Responsive Design**: Ensures a seamless user experience across different devices.

## Project Structure

- **Applications**:
  - **React App**: The main React application that acts as the host for micro frontend modules.
  - **Angular App**: An Angular application integrated as a micro frontend within the React host application.

- **Libraries**:
  - **Shared Components**: Components and utilities shared across both React and Angular applications.
  - **Module Federation Configurations**: Configuration files for managing micro frontend integration using Module Federation.

## Setup and Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/hmnshushrma/mfePoc.git
   cd mfePoc
