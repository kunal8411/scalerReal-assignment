

export const searchProduct = (collections, searchField)=>{
    console.log("collections", collections)
    
    const array = Object.entries(collections)
    console.log("array values", array)
    const filteredProducts = collections.mens.filter(product =>
        product.title.toLowerCase().includes(searchField.toLowerCase())
      )
      return filteredProducts;
}