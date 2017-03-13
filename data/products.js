animals = {
    "adult-rats":{
      "label": "Adult Rats (P21+)",
      "default":true
    },
    "adult-mice":{
      "label": "Adult Mice (P21+)"
    },
    "pup-rats":{
      "label": "Pup Rats (P6+)"
    },
    "pup-mice":{
      "label": "Pup Mice (P10+)"
    }
  };

channels = {
    "1-chan":{
      "label": "1"
    },
    "2-chan":{
      "label": "2",
      "default": true
    },
    "4-chan":{
      "label": "4"
    },
    "6-chan":{
      "label": "6"
    }
  };

biopotentials = {
  "eeg":{
    "label": "EEG (Common)",
    "default": true
  },
  "ecg":{
    "label": "ECG (Common)"
  },
  "emg":{
    "label": "EMG (Common)"
  },
  "eeg-eeg":{
    "label": "EEG/EEG (Differential)"
  },
  "eeg-emg":{
    "label": "EEG/EMG (Differential)"
  },
  "ecg-eeg":{
    "label": "ECG/EEG (Differential)"
  },
  "emg-emg":{
    "label": "EMG/EMG (Differential)"
  }
};

duration = {
  "2-week":{
    "label": "2 weeks or less"
  },
  "2-month":{
    "label": "2 months or less",
    "default": true
  },
  "6-month":{
    "label": "6 months or less"
  },
  "reusable":{
    "label": "more than 6 months"
  }
};

schema = {

  /*

  ANIMALS

  select "adult-mice"
    --> channels disable nothing
    --> biopotentials disable nothing
    --> duration disable "2-week", "6-month"
  select "adult-rats"
    --> channels disable nothing
    --> biopotentials disable nothing
    --> duration disable "2-week"
  select "pup-mice"
    --> channels disable "1", "4", "6"
    --> biopotentials disable "ecg", "emg", "eeg-eeg", "eeg-emg", "ecg-eeg", "emg-emg"
    --> duration disable "2-month", "6-month", "reusable"
  select "pup-rats"
    --> channels disable "1", "4", "6"
    --> biopotentials disable "ecg", "emg", "eeg-eeg", "eeg-emg", "ecg-eeg", "emg-emg"
    --> duration disable "6-month", "reusable"

  CHANNELS

  select "1"
    --> animals disable "pup-mice", "pup-rats"
    --> biopotentials disable "eeg", "eeg-eeg", "eeg-emg", "ecg-emg"
    --> duration disable "2-week", "reusable"
  select "2"
    --> animals disable nothing // Use ANIMAL and CHANNELS
    --> biopotentials disable nothing
    --> duration disable nothing
  select "4"
    --> animals disable "pup-mice", "pup-rats"
    --> biopotentials disable "ecg", "emg", "eeg-eeg", "eeg-emg", "ecg-eeg", "emg-emg"
    --> duration disable "2-week", "reusable"
  select "6"
    --> animals disable "pup-mice", "pup-rats"
    --> biopotentials disable "ecg", "emg", "eeg-eeg", "eeg-emg", "ecg-eeg", "emg-emg"
    --> duration disable "6-month", "reusable"

  BIOPOTENTIALS

  select "eeg"
    --> animals disable nothing
    --> channels disable "1", "4", "6"
    --> duration disable nothing // Use ANIMAL and CHANNELS
  select "ecg"
    --> animals disable "pup-mice", "pup-rats"
    --> channels disable "4", "6"
    --> duration disable "2-week", "reusable"
  select "emg"
    --> animals disable "pup-mice", "pup-rats"
    --> channels disable "4", "6"
    --> duration disable "2-week", "reusable"
  select "eeg-eeg"
    --> animals disable "pup-mice", "pup-rats"
    --> channels disable "1", "4", "6"
    --> duration disable "2-week", "reusable"
  select "eeg-emg"
    --> animals disable "pup-mice", "pup-rats"
    --> channels disable "1", "4", "6"
    --> duration disable "2-week", "reusable"
  select "ecg-emg"
    --> animals disable "pup-mice", "pup-rats"
    --> channels disable "4", "6"
    --> duration disable "2-week", "reusable"
  select "emg-emg"
    --> animals disable "pup-mice", "pup-rats"
    --> channels disable "4", "6"
    --> duration disable "2-week", "reusable"

  DURATION

  select "2-week"
    --> animals disable "adult-mice", "adult-rats"
    --> channels disable "1", "4", "6"
    --> biopotentials disable "ecg", "emg", "eeg-eeg", "eeg-emg", "ecg-eeg", "emg-emg"
  select "2-month"
    --> animals disable "pup-mice", "pup-rats"
    --> channels disable nothing
    --> biopotentials disable nothing
  select "6-month"
    --> animals disable "pup-mice", "pup-rats"
    --> channels disable nothing // use ANIMALS
    --> biopotentials disable nothing
  select "reusable"
    --> animals disable "pup-mice", "pup-rats"
    --> channels disable "1", "4", "6"
    --> biopotentials disable "ecg", "emg", "eeg-eeg", "eeg-emg", "ecg-eeg", "emg-emg"

  */

};
