import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, DocumentChangeAction, DocumentSnapshot, Action } from '@angular/fire/firestore';
import { firestore } from 'firebase';

@Injectable()
export class FirebaseService {

    constructor(
        private afs: AngularFirestore,
    ) {
    }

    getNews(currentNewsAmount: number, lastLoaded: any, newsGetAmount: number): Observable<DocumentChangeAction<{}>[]> {
        console.log(`get news : `, currentNewsAmount, lastLoaded);

        if (!currentNewsAmount) {
            return this.afs.collection('/fl_content', (doc) => doc
                .where('_fl_meta_.schema', '==', 'news')
                .orderBy('date', 'desc')
                .limit(newsGetAmount)).snapshotChanges();
        }

        return this.afs.collection('/fl_content', (doc) => doc
            .where('_fl_meta_.schema', '==', 'news')
            .orderBy('date', 'desc')
            .startAfter(lastLoaded)
            .limit(newsGetAmount)).snapshotChanges() ;
    }

    getNewsCounter(): Observable<firestore.DocumentSnapshot> {
        return this.afs.collection('/counters').doc('newsCounter').get();
    }

    getPost(id: string): Observable<firestore.DocumentSnapshot> {
        console.log(`get post : `, id);
        return this.afs.collection('/fl_content').doc(id).get();
    }

    getAnnouncements(): Observable<DocumentChangeAction<any>[]> {
        return this.afs.collection('/fl_content', (doc) => doc
            .where('_fl_meta_.schema', '==', 'announcement')
            .orderBy('date', 'asc')).snapshotChanges();
    }

    sendMessage(message): Promise<firestore.DocumentReference> {
        return this.afs.collection('/messages').add(message);
    }
}
