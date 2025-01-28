# Inconsistent Deep Link Handling with Expo Linking API

This repository demonstrates a bug in Expo's `Linking` API where the `addEventListener` callback for deep links is not always triggered when the app is in the background. This inconsistency can significantly impact the reliability of deep link functionality.

## Bug Description
The `Linking.addEventListener` function, used to listen for incoming deep links, occasionally fails to execute its callback, even if the app is already running. This problem makes it unreliable to implement features that depend on catching deep links from external sources.

## Reproduction Steps
1. Clone this repository.
2. Run the app using Expo Go.
3. Send a deep link to the app (e.g., using another app).
4. Observe that the console log inside the `Linking.addEventListener` is not always triggered as expected.

## Solution
The solution involves a more robust approach to detecting deep links. Instead of solely relying on the `Linking.addEventListener` for all scenarios, a check is added during the app's initialization to handle cases where the deep link was opened and handled before the event listener was attached. This ensures that deep links are always processed correctly. This solution is demonstrated in `deepLinkSolution.js`.
