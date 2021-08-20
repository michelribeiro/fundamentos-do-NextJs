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
- next-auth
- faunaDB
- axioss


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
### Form of Payment
[https://www.stripe.com](https://www.stripe.com)

### FaunaDb
[https://www.fauna.com](https://www.fauna.com)

### Places to use private things
- getServerSideProps (SSR) Server side rendering
- getStaticPropos (SSG) static site generation
- ApiRoutes

---
E-mail: [michel.ribeiro@michelribeiro.com.br](mailto:michel.ribeiro@michelribeiro.com.br)