import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const faqs = [
  {
    question: 'What is the Smart Health Tracker?',
    answer: 'Smart Health Tracker is an app that helps you monitor symptoms, medication, and health progress easily from your phone.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes. We use industry-standard encryption and follow best practices to ensure your personal health data remains private.',
  },
  {
    question: 'Can I track medication schedules?',
    answer: 'Yes. You can log and get reminders for medication timings, doses, and frequency.',
  },
  {
    question: 'How do I share reports with my doctor?',
    answer: 'You can generate a report and export it as a PDF to email or share directly with your healthcare provider.',
  },
  {
    question: 'Does this app require an internet connection?',
    answer: 'Some features work offline, but syncing and cloud backups require an internet connection.',
  },
];

const FAQItem = ({ faq }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.item}>
      <View style={styles.questionRow}>
        <Text style={styles.question}>{faq.question}</Text>
        <Icon name={expanded ? 'chevron-up' : 'chevron-down'} size={20} />
      </View>
      {expanded && <Text style={styles.answer}>{faq.answer}</Text>}
    </TouchableOpacity>
  );
};

const Faqs = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Frequently Asked Questions</Text>
      {faqs.map((faq, index) => (
        <FAQItem key={index} faq={faq} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    height:"100%"
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2c3e50',
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  questionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  answer: {
    marginTop: 10,
    fontSize: 14,
    color: '#555',
  },
});

export default Faqs;
