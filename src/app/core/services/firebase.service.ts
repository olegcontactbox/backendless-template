import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { firestore } from 'firebase';

@Injectable()
export class FirebaseService {

    constructor(
        // private store: Store<AppState>,
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

    getPost(id: string): Observable<firestore.DocumentSnapshot> {
        console.log(`get post : `, id);
        return this.afs.collection('/fl_content').doc(id).get();
    }

    getAnnouncements(): Observable<DocumentChangeAction<{}>[]> {
        return this.afs.collection('/fl_content', (doc) => doc
            .where('_fl_meta_.schema', '==', 'announcement')
            // .orderBy('_fl_meta_.createdDate.seconds', 'desc')
            ).snapshotChanges();
    }

    sendMessage(message): Promise<firestore.DocumentReference> {
        return this.afs.collection('/messages').add(message);
    }
}
