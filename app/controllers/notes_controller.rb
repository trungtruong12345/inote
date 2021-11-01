# frozen_string_literal: true

class NotesController < ApplicationController
  before_action :set_note, only: %i[show update destroy]

  # GET /notes
  def index
    @notes = current_user.notes.order(created_at: :desc)

    render json: @notes
  end

  # GET /notes/1
  def show
    render json: @note
  end

  # POST /notes
  def create
    @note = current_user.notes.new(note_params)

    if @note.save
      render json: @note, status: :created, location: @note
    else
      render json: { message: 'Title or content can not be blank!', status: 422 }
    end
  end

  # PATCH/PUT /notes/1
  def update
    if (note_params[:content].present? || note_params[:title].present?) && @note.update(note_params)
      render json: @note
    else
      render json: { message: 'Title or content can not be blank!', status: 422 }
    end
  end

  # DELETE /notes/1
  def destroy
    @note.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_note
    @note = current_user.notes.find_by_id(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def note_params
    params.require(:note).permit(:title, :content, :bg_color)
  end
end
