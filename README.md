# Super Sexy React

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

---

## About

SSR - or Super Sexy React - is an base starter kit for react based on [next.js](https://github.com/zeit/next.js/)

This boilerplate is unopinionated - the implementation of your flux or mvc architecture is on to you.

## Installation

```bash
yarn
```

## Running Dev Server

```bash
yarn run dev
```

## Running Production Server

```bash
yarn run build
yarn run start
```


## FAQ

___Q:___ __How do I keep my project up to date with changes/fixes made on `super-sexy-react`?__

```bash
# First clone this repo
git clone https://github.com/ChiefORZ/super-sexy-react my-project

# Go into your project
cd my-project

# Now rename the "origin" git remote to "upstream"
git remote rename origin upstream

# I would then recommend creating a hosted repository for your
# project.

# Then add your newly created repository as the new "origin"
git remote add origin https://github.com/my-github-username/my-project

# Then push the master branch. This will also bind it to new
# "origin" remote.
git push -u origin master

# You can now code/commit/push to origin as normal.
# If you want to at some stage get new changes from the
# super-sexy-react project, then do something like this:

# First fetch the latest changes
git fetch upstream

# Then merge them into your project
git merge upstream/master

# Deal with the merge conflicts, delete the yarn.lock file and
# rebuild it, then commit and push.
```

## Roadmap

* [React Native](https://github.com/facebook/react-native) - Cause of the nature of react we want to reuse our code on every device. React Native for iOS and Android will be included in an near future update.

---

Thanks for checking this out.

– Sebastian Schaffernak, [@ChiefORZ](https://twitter.com/ChiefORZ)
