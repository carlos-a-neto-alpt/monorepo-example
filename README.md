# Monorepo Project Example

This is a front-end monorepo project example with mobile,
web and shared packages that both platforms can take advantage.
This project is meant to show the architecture, here is the folder structure:

```
- /project-root
    L /apps
        L /mobile (Expo - React Native)
        L /web (Next.js)
    L /packages
        L /ui (React / React Native - Works on both apps)

```

In the packages folder we can put anything that can be shared between both platforms,
we can put a `data` folder to share the endpoints that are consumed,
the type of objects they return, we can share styles, components, screens, anything.

Of course there are specific configuration for each platform that must be configured in each
project, but the front end also works differently on mobile and web, so not everything can be
shared 100%, when this happens we can make two different files in the shared ui package one
for mobile `filename.tsx` and one for web `filename.web.tsx` and in the web project we can
configure it to select the `.web.*` files first, if it does not exist it goes for the
normal files extension.

## Advantages

- Sharable code, styles, screens, components, etc.

- Faster development because the screens are reused and not written twice

- With a packages folder, we can separate the "core" of the front-end and reuse it in each platform, this way we have each concept in its own place, making it easier to find what we need and keeping it organized.

- Flexibility, any UI change we can go directly to the UI folder and find the screen to change instead of changing in the web app and then in the mobile app, that only happens if we want to change the wrapper or how the screen is supposed to behave in each platform.

- Scalable, it is easier to add more concerns to the application, for example if we want to make it international and have multiple languages in the future, we could have a `translations` shared folder which would hold the translations in multiple languages and would be used in the web and mobile platform.

## Disadvantages

- A little bit harder to configure, requires manual configuration, normally with front-end projects we execute one `npx create-*` command and we already have a running project, to make a monorepo we depend on the package manager configuration so we can reference the packages in our applications.

- A lot of times we will have specific code in web and mobile, not everything is reusable, but the point of the monorepo is to have somethings reusable so we don't need to work on two separated projects and have 100% of the code duplicated, this way we have a little percentage of duplication and a lot of reused components, screens, configuration, etc.

- A monorepo project is naturally way bigger than a platform-specific project, because we might have two, three or four different platforms and instead of having four different projects to support we have just one with shared code, if we don't be careful with the structure and pattern it can become really messy and hard to work on.

# Project Structure

All screens, components, forms, all the shared code **MUST** have a folder and inside the folder an `index.tsx` file instead of just a file, what **NOT** to do:

```
- /packages
    L /ui
        L /screens
            L /auth
                L login.tsx
                L login.web.tsx
                L sign-up.tsx
                L forgot-password.tsx
                L forgot-password.web.tsx
```

In this example we have only the sign up screen 100% reusable in both platforms, the problem with this approach is that it makes harder to read, we have duplicated names, and if we wanted to make another file to have the shared code between each screen, it would become even more harder to find what we need, here is what we need to do:

```
- /packages
    L /ui
        L /screens
            L /auth
                L /login
                    L index.tsx
                    L index.web.tsx
                    L /fragments
                        L shared-login-specific-component.tsx
                L /sign-up
                    L index.tsx
                L /forgot-password
                    L index.tsx
                    L index.web.tsx
                    L /fragments
                        L shared-forgot-password-specific-component.tsx
```

With this structure it is easier to read the names and find the files, we can also in each screen add a fragment of code that can be shared between both platforms, this is more readable and organized.

# Rules

1. The project folder structure **MUST** match the URL path, example `my-domain.com/auth/login`:

```
- /web
    L /auth
        L /login
            page.tsx  (Next.js)
- /mobile
    L /auth
        L /login
            L index.tsx
- /packages
    L /ui
        L /screens
            L /auth
                L /login
                    L index.tsx
                    L index.web.tsx
                    L /fragments
                        L specific-shared-component.tsx
```

> NOTE: Notice the file path in the packages starts at the screens folder

2. All the file and folder names **MUST** be in **lower case** separated with an hyphen where is the space, this is just a pattern to keep all the files and folders organized because we might have code that depends on the file name and without a pattern this will be difficult to work on.
3. The components declarations, functions, hooks, states, constants, variables, must be in `camelCase`, the types and components references must be in `PascalCase` and the constants in the project (not the constants in the pages, components, etc) must be in `UPPER_CASE` with an underscore to separete the words (the projects constants are often in the .env file).
4. Only put components in the components folder if they are 100% reusable in any screen and in that platform or for all platforms. If the component is specific for that screen or context, create a folder called `fragments` inside the screen folder. Components are reusable anywhere in the projects, fragments are specific for a certain context or screen and not reusable anywhere else except a few screens.
