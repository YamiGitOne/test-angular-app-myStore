export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 999,
    description: 'Un teléfono grande con una de las mejores pantallas',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'Un gran teléfono con una de las mejores cámaras.',
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'Un teléfono con el mejor tamaño.',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
