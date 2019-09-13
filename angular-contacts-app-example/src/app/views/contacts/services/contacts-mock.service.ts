import { Observable, of } from 'rxjs';
import { Contact } from '@app/core/models';


export class ContactsServiceMock {

  contacts = [{
    id: 1,
    name: 'john',
    email: 'john@gmail.com'
    ,status: 'S'
  }, {
    id: 2,
    name: 'adam',
    email: 'adam@gmail.com'
    ,status: 'S'
  }];

  index(): Observable<Contact[]> {
   return of(this.contacts);
  }

  show(conactId: number): Observable<Contact> {
    return of({
      id: 1,
      name: 'john',
      email: 'john@gmail.com'
      ,status: 'S'
    });
  }

  create(contact: Contact) {
    return of({
      id: 4,
      name: 'john doe',
      email: 'john@gmail.com'
      ,status: 'S'
    });
  }

  destroy(id: number): Observable<number> {
    return of(1);
  }

  update(contact: Contact): Observable<Contact> {
    return of(contact);
  }

}
