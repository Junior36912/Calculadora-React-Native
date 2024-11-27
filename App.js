import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';

const App = () => {
  const [input, setInput] = useState('0');
  const [operator, setOperator] = useState(null);
  const [previousInput, setPreviousInput] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlePress = (value) => {
    if (['+', '-', '*', '/'].includes(value)) {
      setOperator(value);
      setPreviousInput(input);
      setInput('0');
    } else if (value === 'AC') {
      setInput('0');
      setPreviousInput(null);
      setOperator(null);
    } else if (value === '=') {
      if (operator && previousInput !== null) {
        const result = calculate();
        setInput(String(result));
        setOperator(null);
        setPreviousInput(null);
      }
    } else if (value === '+/-') {
      setInput((prev) => String(parseFloat(prev) * -1));
    } else if (value === '%') {
      setInput((prev) => String(parseFloat(prev) / 100));
    } else {
      setInput((prev) => (prev === '0' ? value : prev + value));
    }
  };

  const calculate = () => {
    const prev = parseFloat(previousInput);
    const current = parseFloat(input);

    switch (operator) {
      case '+':
        return prev + current;
      case '-':
        return prev - current;
      case '*':
        return prev * current;
      case '/':
        return prev / current;
      default:
        return current;
    }
  };

  const renderButton = (value, backgroundColor, textColor = '#fff') => (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={() => handlePress(value)}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.background, { backgroundColor: '#000' }]}>
        {/* Botão de Menu */}
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => setIsModalVisible(true)}
        >
          <Text style={styles.menuButtonText}>⋮</Text>
        </TouchableOpacity>

        <View style={styles.display}>
          <Text style={styles.displayText}>{input}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.row}>
            {renderButton('AC', '#a5a5a5', '#000')}
            {renderButton('+/-', '#a5a5a5', '#000')}
            {renderButton('%', '#a5a5a5', '#000')}
            {renderButton('/', '#f09a36')}
          </View>
          <View style={styles.row}>
            {renderButton('7', '#333')}
            {renderButton('8', '#333')}
            {renderButton('9', '#333')}
            {renderButton('*', '#f09a36')}
          </View>
          <View style={styles.row}>
            {renderButton('4', '#333')}
            {renderButton('5', '#333')}
            {renderButton('6', '#333')}
            {renderButton('-', '#f09a36')}
          </View>
          <View style={styles.row}>
            {renderButton('1', '#333')}
            {renderButton('2', '#333')}
            {renderButton('3', '#333')}
            {renderButton('+', '#f09a36')}
          </View>
          <View style={styles.row}>
            {renderButton('0', '#333', '#fff', { flex: 2 })}
            {renderButton('.', '#333')}
            {renderButton('=', '#f09a36')}
          </View>
        </View>
      </View>

      {/* Modal com informações */}
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Sobre o Desenvolvedor</Text>
            <Text style={styles.modalText}>José Jackson Lima de Souza Júnior</Text>
            <Text style={styles.modalText}>Estudante de ADS - IFPI Pedro II</Text>
            <Text style={styles.modalText}>LinkedIn: linkedin.com/in/júnior-jackson</Text>
            <Text style={styles.modalText}>GitHub: github.com/Junior36912</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  display: {
    padding: 20,
    alignItems: 'flex-end',
    backgroundColor: '#000',
  },
  displayText: {
    fontSize: 60,
    color: '#fff',
    fontWeight: 'bold',
  },
  buttons: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    margin: 5,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  menuButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  menuButtonText: {
    fontSize: 30,
    color: '#fff',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 5,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#f09a36',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
