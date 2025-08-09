# Fix for JavaScript Syntax Error in index.html

## Problem Identified

**Location**: `index.html:866`  
**Error**: "Declaration or statement expected"  
**Cause**: Stray closing parenthesis and semicolon `});`

## Code Analysis

The error occurs in the `loadFromStorage()` function. Here's the structure:

```javascript
async function loadFromStorage() {
    try {
        // Firebase loading logic (lines 815-842)
    } catch (error) {
        console.error('Error loading products from Firebase:', error);

        // Fallback to localStorage if Firebase fails
        try {
            // localStorage fallback logic (lines 847-862)
        } catch (fallbackError) {
            console.error('localStorage fallback also failed:', fallbackError);
        }
    }
    });  // <-- LINE 866: This is the problematic line - extra closing
}
```

## Solution

**Remove line 866 entirely**. The line contains `});` which is trying to close something that doesn't exist. The function is already properly closed on line 867 with just `}`.

### Corrected Code Structure

```javascript
async function loadFromStorage() {
  try {
    // Firebase loading logic
  } catch (error) {
    console.error("Error loading products from Firebase:", error);

    // Fallback to localStorage if Firebase fails
    try {
      // localStorage fallback logic
    } catch (fallbackError) {
      console.error("localStorage fallback also failed:", fallbackError);
    }
  }
  // Line 866 should be removed entirely
}
```

## Additional Issues Found

After reviewing the surrounding code, I found another issue:

1. **Lines 834-836**: There's incomplete code after the `loadFromStorage()` function:
   ```javascript
   state.filteredProducts = state.products;
   }
   ```
   This appears to be orphaned code that should be inside the `init()` function.

## Recommended Fix

1. **Delete line 866** completely (the line with `});`)
2. **Move lines 835-836** inside the `init()` function where they belong (they're currently floating outside any function)

## Implementation Steps

Since you're in Code mode, you should:

1. Delete line 866 entirely
2. Check that lines 835-836 are properly placed inside the `init()` function (around line 2335)
3. Verify the code runs without syntax errors

The syntax error is caused by an extra closing that doesn't match any opening statement. This is a common issue when refactoring code and accidentally leaving behind closing brackets.
