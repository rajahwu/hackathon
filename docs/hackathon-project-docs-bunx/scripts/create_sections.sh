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

# Loop through section names and create or update corresponding .mdx files
for section in "${sections[@]}"; do
    # Generate the file name in lowercase with .mdx extension
    filename=$(echo "$section" | tr ' ' '_' | tr -d ',' | tr '[:upper:]' '[:lower:]').mdx
    file_path="src/pages/sections/$filename"
    
    if [ -e "$file_path" ]; then
        # Check if the existing file has an uppercase name or .md extension
        if [[ "$file_path" != "src/pages/sections/$filename" ]]; then
            # Rename the file to lowercase with .mdx extension
            mv "$file_path" "src/pages/sections/$filename"
            echo "Renamed $file_path to src/pages/sections/$filename."
        else
            echo "File '$file_path' already exists. Updating contents."
        fi
    fi

    # Create or update the .mdx file with the section name
    echo "# ${section}" > "src/pages/sections/$filename"
done
