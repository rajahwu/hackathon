#!/bin/bash

force=false  # Default is to not force overwrite

# Parse command line arguments
while [[ "$#" -gt 0 ]]; do
    case $1 in
        --force) force=true ;;
        *) echo "Unknown parameter: $1"; exit 1 ;;
    esac
    shift
done

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
        elif [ "$force" = true ]; then
            # Force overwrite the file's contents
            echo "Force overwriting file: $file_path"
        else
            echo "File '$file_path' already exists. Use --force to update contents."
            continue
        fi
    fi

    # Create or update the .mdx file with the specified format
    echo "---
layout: ../../layouts/Section.astro
---
import { Title } from \"../../components/react\";

<Title title=\"$section\" />" > "src/pages/sections/$filename"
done
