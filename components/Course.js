import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const getCourseNumber = course => (
  course.id.slice(1)
)

const Course = ({course, isSelected, select, isDisabled, view}) => (
  <TouchableOpacity style={[styles.courseButton, isSelected && styles.courseButtonSelected,
    isDisabled && styles.courseButtonDisabled]} onPress={()=>{ if (!isDisabled) select(course)}}
    onLongPress={() => view(course)}>
    <Text style={styles.courseText}>
      {`CS ${getCourseNumber(course)}\n${course.meets}`}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  courseButton: {
    flex: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 60,
    padding: 10,
    minWidth: 90,
    maxWidth: 90,
    backgroundColor: '#66b0ff',
  },
  courseButtonSelected: {
    backgroundColor: '#004a99'
  },
  courseButtonDisabled: {
    backgroundColor: '#d3d3d3'
  },
  courseText:{
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default Course;