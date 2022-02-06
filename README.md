# Vahak bid demo app

Project submitted by vishal acharya.

## Summary and approach

- Project is created using latest cra version.
- I have used context api since there was a lot of data sharing between components.
- Instead of useState i have opted for usereducer to manage data since it is more clean and maintainable imo.
- Used basic typescript to obtain basic type safety in the app.
- Use of scss to create reusable classes.
- React suspense (lazy loading) for performance boost (It will be not needed in such small app but anyways...)

## What i could have done better (if i had some more time)

- I could have written better modular css classes.
- Maybe could create a better fallback for suspense loading.
- More flexible ui components.
- Mui like inputs.
- A little better folder structure.

## Folder structure
```
  |-- Vahak
    |-- package.json
    |-- modules
        |-- Bids.tsx
    |-- styles
    |-- types
    |-- components
        |-- svgs
        |-- ui
        |-- Bids
            |-- steps
                |-- allstepsfiles.tsx
                |-- Subs
                    |-- Sub components used in steps main files.

```
## Netlify app 

[Live Demo](https://upbeat-yonath-267772.netlify.app/)