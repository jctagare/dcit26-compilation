import React from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Button,
  ScrollView,
  Text,
  Image,
  ImageBackground,
} from 'react-native';

const SampleModal = (props) => {
  return (
    <Modal visible={props.visible}>
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.picture} source={require('./logo.png')} />
          <Text style={styles.text}>
            <Text>
              {'\n\n'}
              {'    '}In layman's terms, Lorem Ipsum is a dummy or placeholder
              text. It's often used in laying out print, infographics, or web
              design. The primary purpose of Lorem Ipsum is to create text that
              does not distract from the overall layout and visual hierarchy.
              {'\n\n'}
              {'    '}
              The term Lorem Ipsum is derived from the Latin term Dolorem Ipsum
              which means "pain itself. " The text has been in use for a very
              long time and its history spans for over two millennia.
              {'\n\n'}
              {'    '}
              Although the text is in Latin, it does not have any intelligible
              meaning. It's merely a generic text used to hold a place in a file
              until the actual text or visuals are created to replace it.
              {'\n\n'}
              {'    '}
              Its origins were discovered by Richard McClintock, a Latin Scholar
              from Hampden-Sydney College. According to his research, Lorem
              Ipsum dates back to 45 BC, from Classical Latin literature.
              {'\n\n'}
              {'    '}
              The words in the text originated from the book De Finibus Bonorum
              et Malorum (The ends of Good and Evil). The series of books was a
              treatise on the theory of ethics and was written by the ancient
              Roman philosopher and statesman Marcus Tullius Cicero.
              {'\n\n'}
              {'    '}
              It was due to the popularity of De Finibus Bonorum et Malorum that
              the Lorem Ipsum text came to be in its current form. Cicero was
              considered one of the most skilled rhetoricians of all time.
              During the age of enlightenment, his works were considered the
              standard for prose in Latin.
              {'\n\n'}
              {'    '}
              But how did the great works of Cicero ultimately become a filler
              text?
              {'\n\n'}
              {'    '}
              According to McClintock, it may have just been a happy
              coincidence. He theorized that a typesetter, who was required to
              make a type specimen book, used the text as a way to demonstrate
              different fonts. And seeing as the text should be insensible so as
              not to distract from the graphical features, the typesetter
              scrambled the words.
              {'\n\n'}
              {'    '}
              With Cicero's work as one of the most published works during that
              time, the typesetter would most likely have used an excerpt from
              Cicero's books. Due to this strange coincidence, the garbled words
              of a legendary rhetorician has survived for over four centuries.
            </Text>
          </Text>
        </View>
      </ScrollView>
      <Button title="Close" onPress={props.onClose} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  picture: {
    alignItems: 'center',
    width: 300,
    height: 50,
  },
  text: {
    padding: 2,
    textAlign: 'justify',
    marginVertical: 5,
  },
});

export default SampleModal;
