# Architecture rules
- Keep the public Google Analytics measurement ID in a source configuration fallback as well as supporting the connector environment variable, so GitHub Pages and Lovable use the same property without private credentials.
- Load Google Analytics only after explicit statistics consent; omit query strings from page views and reload after withdrawal to stop the loaded tracker.
- Keep cookie preference storage on the visitor's device and provide a settings entry in every page footer, because consent must be reversible.