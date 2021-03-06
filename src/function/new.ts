// オプションパラメータを持つ関数
export const inUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log('Function Parameters sample 1: User is signed in! Username is', username);
    return true;
  } else {
    console.log('Function Parameters sample 2: User is not signed in.');
    return false;
  }
};

// デフォルトパラメータを持つ関数
export const inUserSignedIn2 = (userId: string, username = 'NO NAME'): boolean => {
  if (userId === 'ABC') {
    console.log('Function Parameters sample 1: User is signed in! Username is', username);
    return true;
  } else {
    console.log('Function Parameters sample 2: User is not signed in.');
    return false;
  }
};

// レスとパラメータを持つ関数
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal, productPrice) => {
    return prevTotal + productPrice;
  }, 0);
};
