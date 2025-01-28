This solution incorporates a check within `componentDidMount` to handle deep links that may have been opened before the event listener was attached.  This approach ensures that links opened while the app is in the background are always detected and handled.

```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleUrlChange = (url) => {
      console.log('Deep link received (event listener):', url);
    };

    const linkSubscription = Linking.addEventListener('url', handleUrlChange);

    Linking.getInitialURL().then((url) => {
      setInitialUrl(url);
      console.log('Initial URL:', url);
    });

    return () => {
      linkSubscription.remove();
    };
  }, []);

  useEffect(() => {
    if (initialUrl) {
      console.log('Deep link handled (initial URL):', initialUrl);
    }
  }, [initialUrl]);

  return (
    <View style={styles.container}>
      {/* Your app content here */}
    </View>
  );
}
```