import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonIcon,
  IonItem,
  IonRow,
} from "@ionic/react";
import "./BookCard.css";
import { star, pencil } from "ionicons/icons";
import { Link } from "react-router-dom";
import { Book } from "../Home";

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{book.title}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol size="12" sizeMd="5">
              <img src={book.imageUrl} alt={`${book.title} cover picture`} />
            </IonCol>

            <IonCol size="12" sizeMd="7">
              <div className="book-details">
                <p>{book.description}</p>
                <p style={{ marginTop: 10 }}>$ 14.99</p>

                <Link to="/review">
                  <div className="review-stars" style={{ marginTop: 10 }}>
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                  </div>
                </Link>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonItem lines="none">
          <IonButton color="dark" slot="end" routerLink="/edit">
            <IonIcon icon={pencil}></IonIcon>
          </IonButton>
        </IonItem>
      </IonCardContent>
    </IonCard>
  );
};

export default BookCard;
