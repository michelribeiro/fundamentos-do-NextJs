### Project generated with NextJs

```
yarn create next-app
```

---
#### First step
- Configure interface of App, use like interface `AppProps`, import in MyApp.
- Create archive _document.tsx to calling external links.
### Dependecies
- next
- react
- react-dom
- sass
- react-icons
- Stripe


### DevDependencies

- @types/node
- @types/react
- eslint
- eslint-config-next
- typescript

### Formatting currency

```
new Intl.NumberFormat
```

### To use Server Side Rendering (SSR)

```javascript
export const getServerSideProps:GetServerSideProps = async() => {
  return {
    props: {...something}
  }
}
```

### To use Static Site Generation (SSG)

```javascript
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {...something},
    revalidate: 60 * 60 * 24, // 24 hrs to get other page
  };
};
```


E-mail: [michel.ribeiro@michelribeiro.com.br](mailto:michel.ribeiro@michelribeiro.com.br)