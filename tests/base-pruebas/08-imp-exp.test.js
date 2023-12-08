import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"
import heroes from "../../src/data/heroes"

describe('Pruebas en 08-imp-exp', () => {

  test('getHeroeById debe retornar un heroe por id', () => {

    const id = 1
    const hero = getHeroeById( id )
    //console.log(hero);

    expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

  })

  test('getHeroeById debe retornar undefined si no existe un heroe con ese id', () => {

    const id = 100
    const hero = getHeroeById( id )
    //console.log(hero);

    expect( hero ).toBeFalsy()

  })

  test('getHeroesByOwner debe de regresar un array de heroes de DC', () => {

    const owner = 'DC'
    const heros = getHeroesByOwner( owner )
    //console.log(heros)

    expect( heros.length ).toBe( 3 )
    expect( heros ).toStrictEqual( heroes.filter( heroe => heroe.owner === owner ) )

  })

  test('getHeroesByOwner debe de regresar un array de heroes de Marvel', () => {

    const owner = 'Marvel'
    const heros = getHeroesByOwner( owner )
    //console.log(heros)

    expect( heros.length ).toBe( 2 )
    expect( heros ).toStrictEqual( heroes.filter( heroe => heroe.owner === owner ) )

  })

})