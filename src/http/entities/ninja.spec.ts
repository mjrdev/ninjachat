import { Ninja, NinjaProps } from "./Ninja"


describe('Ninja entity', () => {

  it('should create an entity', () => {
    const props: NinjaProps = {
      name: 'Ninja Name',
      createdAt: new Date()
    }

    const ninja = new Ninja(props);

    expect(ninja).toBeInstanceOf(Ninja);
    expect(ninja.name).toEqual(props.name);
    expect(ninja.createdAt).toEqual(props.createdAt); 
    expect(ninja.id).toBeDefined(); 
  })
})