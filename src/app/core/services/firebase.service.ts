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

    getNews(currentNewsAmount: number, lastLoaded: any, newsGetAmount: number): Observable<DocumentChangeAction<{}>[]> {
        // const newsGetAmount = 5;
        console.log(`get news : `, currentNewsAmount, lastLoaded);

        if (!currentNewsAmount) {

            return this.afs.collection('/fl_content', (doc) => doc
                .where('type', '==', 'news')
                .orderBy('date', 'desc')
                .limit(newsGetAmount)).snapshotChanges();
        }
        return this.afs.collection('/fl_content', (doc) => doc
            .where('type', '==', 'news')
            .orderBy('date', 'desc')
            .startAfter(lastLoaded).limit(newsGetAmount)).snapshotChanges();

    }

    getPost(id: string): Observable<firestore.DocumentSnapshot> {
        console.log(`get post : `, id);
        // this.afs.collection('/fl_content').doc(id).get().toPromise().then(res => console.log(res.data()));
        return this.afs.collection('/fl_content').doc(id).get();
    }
    // getNews(): Promise<firestore.QuerySnapshot> {
    //     return this.afs.firestore.collection('/fl_content').get();
    // }

    sendMessage(message) {
        this.afs.collection('/messages').add(message);
    }
}
