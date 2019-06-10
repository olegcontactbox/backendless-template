import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, DocumentChangeAction, DocumentSnapshot } from '@angular/fire/firestore';
import { firestore } from 'firebase';
// import { Subscription } from 'rxjs';

@Injectable()
export class FirebaseService {
    // sub: Subscription = new Subscription();

    constructor(
        // private ap: AlphaPointService,
        // private store: Store<AppState>,
        private afs: AngularFirestore,
    ) {
    }

    getNews(): Observable<DocumentChangeAction<{}>[]> {
        return this.afs.collection('/fl_content', (doc) => doc.orderBy('date', 'asc')).snapshotChanges();
    }

    getPost(id: string): Observable<firestore.DocumentSnapshot> {
        console.log(`getP`, id);
        // this.afs.collection('/fl_content').doc(id).get().toPromise().then(res => console.log(res.data()));
        return this.afs.collection('/fl_content').doc(id).get();
    }
    // getNews(): Promise<firestore.QuerySnapshot> {
    //     return this.afs.firestore.collection('/fl_content').get();
    // }

}
