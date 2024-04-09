import csv

def convert_csv_to_text(input_csv_file, output_text_file, column1, column2):
    try:
        with open(input_csv_file, 'r') as csv_file:
            with open(output_text_file, 'w') as text_file:
                csv_reader = csv.reader(csv_file)
                for row in csv_reader:
                    if len(row) >= max(column1, column2) + 1:
                        text_file.write(f"{row[column1]}, {row[column2]}\n")
                    # else:
                    #     print(f"Row {row} does not have the required number of columns.")

        # print(f"Conversion successful. Text file saved as {output_text_file}")

    except Exception as e:
        print(f"An error occurred: {str(e)}")

# Example usage:
convert_csv_to_text('rights.csv', 'output.txt', "Question", "Answer")
