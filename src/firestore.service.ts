import { Injectable } from '@nestjs/common';
import { firestoreAdmin } from './firestore.config';

@Injectable()
export class FirestoreService {
  private readonly collectionName = 'posts';

  async create(data: any): Promise<string> {
    const documentRef = await firestoreAdmin.collection(this.collectionName).add(data);
    return documentRef.id;
  }

  async findAll(): Promise<any[]> {
    const snapshot = await firestoreAdmin.collection(this.collectionName).get();
    const documents = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return documents;
  }

  async findOne(id: string): Promise<any> {
    const documentRef = firestoreAdmin.collection(this.collectionName).doc(id);
    const snapshot = await documentRef.get();
    if (!snapshot.exists) {
      return null;
    }
    return { id: snapshot.id, ...snapshot.data() };
  }

  async update(id: string, data: any): Promise<void> {
    const documentRef = firestoreAdmin.collection(this.collectionName).doc(id);
    await documentRef.update(data);
  }

  async delete(id: string): Promise<void> {
    const documentRef = firestoreAdmin.collection(this.collectionName).doc(id);
    await documentRef.delete();
  }
}
