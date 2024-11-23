import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
  IonTextarea,
  IonTitle,
  IonToolbar,
  useIonModal,
} from "@ionic/react";
import "./Review.css";
import { add, star } from "ionicons/icons";
import AddReviewModal from "./components/AddReviewModal";
import { useState } from "react";
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";

const Review: React.FC = () => {
  const [present, dismiss] = useIonModal(AddReviewModal, {
    dismiss: (data: string, role: string) => dismiss(data, role),
  });

  function openModal() {
    present({
      // onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => {
      //   if (ev.detail.role === 'confirm') {
      //   }
      // },
    });
  }

  // Generate an array of review items
  const reviews = Array.from({ length: 4 }, (_, i) => `Review ${i + 1}`);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="ion-padding-horizontal">
          <IonTitle>Reviews - Harry Potter: Sorcerer Stone</IonTitle>
          <IonButton slot="end" onClick={openModal}>
            <IonIcon icon={add} slot="start" />
            Add review
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Reviews - Harry Potter: Sorcerer Stone
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* Loop through the reviews array to render IonItem components */}
        {reviews.map((review, index) => (
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={star} />
                <IonIcon icon={star} />
                <IonIcon icon={star} />
                <IonIcon icon={star} />
              </IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              <IonText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                odit esse eius, totam aspernatur tenetur aut placeat voluptas
                officiis optio!
              </IonText>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Review;
