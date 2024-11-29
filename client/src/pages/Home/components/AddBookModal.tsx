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
  useIonToast,
} from "@ionic/react";
import axios from "axios";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const AddBookModal = ({
  dismiss,
}: {
  dismiss: (data?: boolean | null | undefined, role?: string) => void;
}) => {
  const apiUrl: string =
    "https://prikl74ph0.execute-api.us-east-2.amazonaws.com";
  const [present] = useIonToast();

  const showToast = (
    position: "top" | "middle" | "bottom",
    message: string,
    color: "success" | "danger" | "warning" | "dark" | "light"
  ) => {
    present({
      message,
      duration: 1500,
      position: position,
      color,
    });
  };

  const titleRef = useRef<HTMLIonInputElement>(null);
  const imageUrlRef = useRef<HTMLIonInputElement>(null);
  const descriptionRef = useRef<HTMLIonInputElement>(null);

  const handleAdd = async () => {
    const title = titleRef.current?.value;
    const imageUrl = imageUrlRef.current?.value;
    const description = descriptionRef.current?.value;

    if (!title || !description || !imageUrl) {
      showToast("top", "Fill out all the fields!", "danger");
      return;
    }

    const payload = {
      bookId: uuidv4(),
      title,
      imageUrl,
      description,
      // reviews can be added later
    };

    await axios
      .put(`${apiUrl}/book`, payload)
      .then((_) => {
        dismiss(true);
        showToast("top", "New book added!", "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton color="medium" onClick={() => dismiss(null, "cancel")}>
              Cancel
            </IonButton>
          </IonButtons>
          <IonTitle>Add a book</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonInput
            ref={titleRef}
            labelPlacement="stacked"
            label="Book Title"
            placeholder="The Alchemist"
            required={true}
          />
        </IonItem>
        <IonItem>
          <IonInput
            ref={imageUrlRef}
            labelPlacement="stacked"
            label="Image URL"
            placeholder="https://url-to-image"
            required={true}
          />
        </IonItem>
        <IonItem>
          <IonInput
            ref={descriptionRef}
            labelPlacement="stacked"
            label="Book description"
            placeholder="This book about a boy and girl who fell in love!"
            required={true}
          />
        </IonItem>
      </IonContent>

      <IonFooter>
        <IonButton
          onClick={handleAdd}
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

export default AddBookModal;
