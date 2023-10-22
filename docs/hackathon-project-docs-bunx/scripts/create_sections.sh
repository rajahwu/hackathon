#!/bin/bash

# List of section names from index.astro
sections=(
    "Abstract"
    "Introduction"
    "Architecture"
    "Setting Up the Environment"
    "Directory Structure"
    "Data Flow"
    "Backend"
    "Frontend"
    "Database"
    "Authentication and Authorization"
    "Third-Party Services"
    "Testing"
    "Deployment"
    "Scaling and Performance"
    "Troubleshooting and Debugging"
    "Conclusion"
    "References"
    "Appendices"
    "Acknowledgments"
)

# Create the sections directory if it doesn't exist
mkdir -p src/pages/sections

# Loop through section names and create corresponding .md files
for section in "${sections[@]}"; do
    # Generate the file name
    filename=$(echo "$section" | tr ' ' '_' | tr -d ',')
    # Create the .md file with the section name
    touch "src/pages/sections/${filename}.md"
    # Add a placeholder title to the .md file
    echo "# ${section}" > "src/pages/sections/${filename}.md"
done
