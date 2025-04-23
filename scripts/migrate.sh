#!/bin/bash
echo "Running TypeORM Migrations..."
npm run build
npm run migration:run
