import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonInput,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useRef } from "react";

const AddReviewModal = ({
  dismiss,
}: {
  dismiss: (data?: string | null | undefined | number, role?: string) => void;
}) => {
  const inputRef = useRef<HTMLIonInputElement>(null);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton color="medium" onClick={() => dismiss(null, "cancel")}>
              Cancel
            </IonButton>
          </IonButtons>
          <IonTitle>Write your review!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonInput
            ref={inputRef}
            labelPlacement="stacked"
            label="Review description"
            placeholder="This book was great!"
          />
        </IonItem>
      </IonContent>

      <IonFooter>
        <IonButton
          onClick={() => dismiss(inputRef.current?.value, "confirm")}
          strong={true}
          color="dark"
          expand="block"
        >
          Add
        </IonButton>
      </IonFooter>
    </IonPage>
  );
};

export default AddReviewModal;
