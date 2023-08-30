import {View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Text from '../../../components/CustomText';
import {useThemeAwareObject} from '../../../theme/theme';
import createstyles from './style';
import {Colours} from '../../../components/Colors';
import Icon from 'react-native-vector-icons/AntDesign';

export default function AllDetail(props) {
  const styles = useThemeAwareObject(createstyles);
  const [status, setstatus] = useState(props.route.params.status);
  const [date, setDate] = useState(new Date(props.route.params.date.toDate()));
  const [method, setmethod] = useState(props.route.params.paymentmethod);
  const [type, settype] = useState(props.route.params.type);
  const [textInputs, setTextInputs] = useState(
    props.route.params.milestone
      ? props.route.params.milestone.map((value, index) => ({
          value: value.milestone || '',
          amount: value.amount || '',
          date: new Date(value.date.toDate()) || new Date(),
        }))
      : [],
  );

  return (
    <View style={styles.Container}>
      <View style={styles.Containerheading}>
        <TouchableOpacity
          style={styles.backarrow}
          onPress={() => props.navigation.goBack()}>
          <Icon name="leftcircle" size={35} style={styles.Bariconcolor} />
        </TouchableOpacity>
        <Text style={styles.heading}>All Details</Text>
        <Text> </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Containerheadingname}>
          <Text style={styles.headingtext}>Status:</Text>
          <Text style={styles.statustext}>{status}</Text>
        </View>

        <View style={styles.Containerheadingname}>
          <Text style={styles.headingtext}>Project Name:</Text>
          <Text style={styles.statustext}>
            {props.route.params.projectname}
          </Text>
        </View>

        <View style={styles.Containerheadingname}>
          <Text style={styles.headingtext}>Client Name:</Text>
          <Text style={styles.statustext}>{props.route.params.clientname}</Text>
        </View>

        <View style={styles.Containerheadingname}>
          <Text style={styles.headingtext}>Start Date:</Text>
          <Text style={styles.statustext}>{date.toDateString()} </Text>
        </View>

        <View style={styles.Containerheadingname}>
          <Text style={styles.headingtext}>Client Timezone:</Text>
          <Text style={styles.statustext}>{props.route.params.clienttime}</Text>
        </View>

        <View style={styles.Containerheadingname}>
          <Text style={styles.headingtext}>Milestone:</Text>
          {props?.route?.params?.milestone?.length == 0 ||
          props?.route?.params?.milestone == undefined ? (
            <Text style={styles.mileemptytext}>Milestone empty.</Text>
          ) : (
            <View>
              {textInputs.map((input, index) => {
                return (
                  <View key={index} style={{flexDirection: 'row'}}>
                    <TextInput
                      editable={false}
                      style={styles.inputtext}
                      value={input.value}
                    />
                    <TextInput
                      editable={false}
                      style={styles.inputtext}
                      value={`${input.amount}`}
                    />

                    <View style={styles.ContainerDate}>
                      <Text style={styles.inputtext}>
                        {input.date.toDateString()}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          )}
        </View>

        <View style={styles.Containerheadingname}>
          <Text style={styles.headingtext}>Country:</Text>
          <Text style={styles.statustext}>{props.route.params.country}</Text>
        </View>

        <View style={styles.Containerheadingname}>
          <Text style={styles.headingtext}>Type:</Text>
          <Text style={styles.statustext}>{type}</Text>
        </View>

        <View style={styles.Containerheadingname}>
          <Text style={styles.headingtext}>Notes:</Text>
          <Text style={styles.statustext}>{props.route.params.notes}</Text>
        </View>

        <View style={styles.Containerheadingname}>
          <Text style={styles.headingtext}>Project submited by:</Text>
          <Text style={styles.statustext}>{props.route.params.submitby}</Text>
        </View>

        <View style={styles.Containerheadingname}>
          <Text style={styles.headingtext}>Payment Method:</Text>
          <Text style={styles.statustext}>{method}</Text>
        </View>

        <View style={styles.MaincontainerBtn}>
          <TouchableOpacity
            style={styles.containerBtn}
            onPress={() => props.navigation.goBack()}>
            <Text style={styles.btntext}>Done</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
